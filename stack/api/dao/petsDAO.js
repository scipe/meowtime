import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let pets;

export default class petsDAO {
  static async injectDB(conn) {
    if (pets) {
      return;
    }
    try {
      pets = await conn.db(process.env.MEOWTIME_NS).collection('pets');
    } catch (e) {
      console.error(`Unable to establish a collection handle in petsDAO: ${e}`);
    }
  }

  static async getPets({ filters = null, page = 0, petsPerPage = 20 } = {}) {
    let query;
    if (filters) {
      console.log('filters: ', filters);
      const filtersArr = [];

      for (let key of Object.keys(filters)) {
        switch (key) {
          case 'name':
            filtersArr.push({ name: new RegExp(filters['name'], 'i') });
            break;
          case 'weightFrom':
            filtersArr.push({ weight: { $gte: +filters[key] } });
            break;
          case 'weightTo':
            filtersArr.push({ weight: { $lte: +filters[key] } });
            break;
          case 'ageFrom':
            filtersArr.push({ age: { $gte: +filters[key] } });
            break;
          case 'ageTo':
            filtersArr.push({ age: { $lte: +filters[key] } });
            break;
          case 'isCastrated':
            filtersArr.push({ isCastrated: { $eq: filters[key] === 'true' } });
            break;
          case 'isVaccinated':
            filtersArr.push({ isVaccinated: { $eq: filters[key] === 'true' } });
            break;
          case 'isFleaTreated':
            filtersArr.push({ isFleaTreated: { $eq: filters[key] === 'true' } });
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
      cursor = await pets.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { petsList: [], totalNumPets: 0 };
    }

    const displayCursor = cursor.limit(petsPerPage).skip(petsPerPage * page);

    try {
      const petsList = await displayCursor.toArray();
      const totalNumPets = await pets.countDocuments(query);

      return { petsList, totalNumPets };
    } catch (error) {
      console.error(`Unable to convert cursor to array or problem counting documents, ${error}`);
      return { petsList: [], totalNumPets: 0 };
    }
  }

  static async getPetByUuid(uuid) {
    try {
      const pipeline = [
        {
          $match: {
            uuid,
          },
        },
        {
          $lookup: {
            from: 'reviews',
            localField: 'uuid',
            foreignField: 'petId',
            as: 'reviews',
          },
        },
      ];
      return await pets.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getPetByID: ${e}`);
      throw e;
    }
  }

  static async getPetById(id) {
    try {
      const pipeline = [
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
        {
          $lookup: {
            from: 'reviews',
            let: {
              id: '$_id',
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['$pet_id', '$$id'],
                  },
                },
              },
              {
                $sort: {
                  date: -1,
                },
              },
            ],
            as: 'reviews',
          },
        },
        {
          $addFields: {
            reviews: '$reviews',
          },
        },
      ];
      return await pets.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getPetByID: ${e}`);
      throw e;
    }
  }

  static async getBreeds() {
    let breeds = [];
    try {
      breeds = await pets.distinct('breed');
      return breeds;
    } catch (e) {
      console.error(`Unable to get breed, ${e}`);
      return breeds;
    }
  }

  static async addPet(petDoc) {
    try {
      return await pets.insertOne(petDoc);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      throw new Error(e);
    }
  }
}
