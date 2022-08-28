import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let events;

export default class eventsDAO {
  static async injectDB(conn) {
    if (events) {
      return;
    }
    try {
      events = await conn.db(process.env.MEOWTIME_NS).collection('events');
    } catch (e) {
      console.error(`Unable to establish a collection handle in eventsDAO: ${e}`);
    }
  }

  static async getEvents({ filters = null, page = 0, eventsPerPage = 1000 } = {}) {
    let query;
    if (filters) {
      const filtersArr = [];

      // console.log(new Date(filters['dateFrom']))

      for (let key of Object.keys(filters)) {
        switch (key) {
          // case 'name':
          //   filtersArr.push({ name: new RegExp(filters['name'], 'i') });
          //   break;
          case 'dateFrom':
            filtersArr.push({ startDate: { $gte: new Date(filters['dateFrom']) } });
            break;
          case 'dateTo':
            filtersArr.push({ endDate: { $lte: new Date(filters[key]) } });
            break;
          case 'city':
            filtersArr.push({
              city: { $regex: new RegExp(filters[key].toLowerCase()), $options: 'i' },
            });
            break;
          case 'address':
            filtersArr.push({
              city: { $regex: new RegExp(filters[key].toLowerCase()), $options: 'i' },
            });
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
      cursor = await events.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { eventsList: [], totalNumEvents: 0 };
    }

    const displayCursor = cursor.limit(eventsPerPage).skip(eventsPerPage * page);

    try {
      const eventsList = await displayCursor.toArray();
      const totalNumEvents = await events.countDocuments(query);

      return { eventsList, totalNumEvents };
    } catch (error) {
      console.error(`Unable to convert cursor to array or problem counting documents, ${error}`);
      return { eventsList: [], totalNumEvents: 0 };
    }
  }

  static async getEventByUuid(uuid) {
    try {
      const pipeline = [
        {
          $match: {
            uuid,
          },
        },
      ];
      return await events.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getEventByID: ${e}`);
      throw e;
    }
  }

  static async addEvent(eventDoc) {
    try {
      return await events.insertOne(eventDoc);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      throw new Error(e);
    }
  }
}
