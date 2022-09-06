import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let auctions;

export default class auctionsDAO {
  static async injectDB(conn) {
    if (auctions) {
      return;
    }
    try {
      auctions = await conn.db(process.env.MEOWTIME_NS).collection('auctions');
    } catch (e) {
      console.error(`Unable to establish a collection handle in auctionsDAO: ${e}`);
    }
  }

  static async getAuctions({ filters = null, page = 0, auctionsPerPage = 1000 } = {}) {
    let query;
    if (filters) {
      const filtersArr = [];

      for (let key of Object.keys(filters)) {
        switch (key) {
          case 'startPriceMin':
            filtersArr.push({ startPrice: { $gte: +filters[key] } });
            break;
          case 'startPriceMax':
            filtersArr.push({ startPrice: { $lte: +filters[key] } });
            break;
          case 'currentPrice':
            filtersArr.push({ currentPrice: { $eq: +filters[key] } });
            break;

          default:
            const obj = {};

            obj[key] = { $eq: filters[key] };
            filtersArr.push(obj);
            break;
        }
      }

      console.log(filtersArr);

      if (filtersArr.length > 0) {
        query = { $and: filtersArr };
      }
    }

    let cursor;

    try {
      cursor = await auctions.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { auctionsList: [], totalNumAuctions: 0 };
    }

    const displayCursor = cursor.limit(auctionsPerPage).skip(auctionsPerPage * page);

    try {
      const auctionsList = await displayCursor.toArray();
      const totalNumAuctions = await auctions.countDocuments(query);

      return { auctionsList, totalNumAuctions };
    } catch (error) {
      console.error(`Unable to convert cursor to array or problem counting documents, ${error}`);
      return { auctionsList: [], totalNumAuctions: 0 };
    }
  }

  static async getAuctionByUuid(uuid) {
    try {
      const pipeline = [
        {
          $match: {
            uuid,
          },
        },
      ];
      return await auctions.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getAuctionByID: ${e}`);
      throw e;
    }
  }

  static async addAuction(auctionDoc) {
    try {
      return await auctions.insertOne(auctionDoc);
    } catch (e) {
      console.error(`Unable to post auction: ${e}`);
      throw new Error(e);
    }
  }
}
