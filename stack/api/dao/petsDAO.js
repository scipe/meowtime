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
      if ('name' in filters) {
        query = { $text: { $search: filters['name'] } };
      } else if ('breed' in filters) {
        query = { breed: { $eq: filters['breed'] } };
      } else if ('petSpice' in filters) {
        query = { petSpice: { $eq: filters['petSpice'] } };
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

  static async addPet(
    ownerId,
    petSpice,
    name,
    age,
    photo,
    breed,
    color,
    gender,
    isCastrated,
    isVaccinated,
    isFleaTreated,
    weight,
    fears,
    diseases,
    createdAt
  ) {
    try {
      const petDoc = {
        ownerId,
        petSpice,
        name,
        age,
        photo,
        breed,
        color,
        gender,
        isCastrated,
        isVaccinated,
        isFleaTreated,
        weight,
        fears,
        diseases,
        createdAt,
      };
      console.log('name: ', name);
      return await pets.insertOne(petDoc);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      throw new Error(e);
    }
  }
}
