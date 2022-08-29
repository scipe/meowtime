import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let bids;

export default class bidsDAO {
  static async injectDB(conn) {
    if (bids) {
      return;
    }
    try {
      bids = await conn.db(process.env.MEOWTIME_NS).collection('bids');
    } catch (e) {
      console.error(`Unable to establish a collection handle in bidsDAO: ${e}`);
    }
  }

  static async getBids({ filters = null, page = 0, bidsPerPage = 1000 } = {}) {
    let query;
    if (filters) {
      const filtersArr = [];

      for (let key of Object.keys(filters)) {
        switch (key) {
          default:
            const obj = {};

            obj[key] = { $eq: filters[key] };
            filtersArr.push(obj);
            break;
        }
      }

      if (filtersArr.length > 0) {
        query = { $and: filtersArr };
      }
    }

    let cursor;

    try {
      cursor = await bids.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { bidsList: [], totalNumBids: 0 };
    }

    const displayCursor = cursor.limit(bidsPerPage).skip(bidsPerPage * page);

    try {
      const bidsList = await displayCursor.toArray();
      const totalNumBids = await bids.countDocuments(query);

      return { bidsList, totalNumBids };
    } catch (error) {
      console.error(`Unable to convert cursor to array or problem counting documents, ${error}`);
      return { bidsList: [], totalNumBids: 0 };
    }
  }

  static async getBidByUuid(uuid) {
    try {
      const pipeline = [
        {
          $match: {
            uuid,
          },
        },
      ];
      return await bids.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getBidByID: ${e}`);
      throw e;
    }
  }

  static async addBid(bidDoc) {
    try {
      return await bids.insertOne(bidDoc);
    } catch (e) {
      console.error(`Unable to post bid: ${e}`);
      throw new Error(e);
    }
  }
}
