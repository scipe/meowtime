import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let reviews;

export default class reviewsDAO {
  static async injectDB(conn) {
    if (reviews) {
      return;
    }
    try {
      reviews = await conn.db(process.env.MEOWTIME_NS).collection('reviews');
    } catch (e) {
      console.error(`Unable to establish a collection handle in reviewsDAO: ${e}`);
    }
  }

  static async getReviews({ filters = null, page = 0, reviewsPerPage = 1000 } = {}) {
    let query;
    if (filters) {
      const filtersArr = [];

      for (let key of Object.keys(filters)) {
        switch (key) {
          case 'rate':
            filtersArr.push({ rate: { $eq: +filters[key] } });
            break;
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
      cursor = await reviews.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { reviewsList: [], totalNumReviews: 0 };
    }

    const displayCursor = cursor.limit(reviewsPerPage).skip(reviewsPerPage * page);

    try {
      const reviewsList = await displayCursor.toArray();
      const totalNumReviews = await reviews.countDocuments(query);

      return { reviewsList, totalNumReviews };
    } catch (error) {
      console.error(`Unable to convert cursor to array or problem counting documents, ${error}`);
      return { reviewsList: [], totalNumReviews: 0 };
    }
  }

  static async getReviewByUuid(uuid) {
    try {
      const pipeline = [
        {
          $match: {
            uuid,
          },
        },
      ];
      return await reviews.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getReviewByID: ${e}`);
      throw e;
    }
  }

  static async addReview(reviewDoc) {
    try {
      return await reviews.insertOne(reviewDoc);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      throw new Error(e);
    }
  }
}
