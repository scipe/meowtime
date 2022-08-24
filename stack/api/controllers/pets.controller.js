import PetsDAO from '../dao/petsDAO.js';

export default class PetsController {
  static async apiGetPets(req, res, next) {
    const petsPerPage = req.query.petsPerPage ? parseInt(req.query.petsPerPage, 10) : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0; // page number

    let filters = {};
    if (req.query.breed) {
      filters.breed = req.query.breed;
    } else if (req.query.zipcode) {
      filters.zipcode = req.query.zipcode;
    } else if (req.query.name) {
      filters.name = req.query.name;
    }

    const { petsList, totalNumPets } = await PetsDAO.getPets({
      filters,
      page,
      petsPerPage,
    });

    let response = {
      pets: petsList,
      page: page,
      filters: filters,
      entries_per_page: petsPerPage,
      total_results: totalNumPets,
    };
    res.json({
      status: 200,
      message: 'all pets',
      data: response,
    });
  }

  // static async apiGetPetById(req, res, next) {
  //   try {
  //     let id = req.params.id || {};
  //     let pet = await PetsDAO.getPetById(id);
  //     if (!pet) {
  //       res.status(404).json({ error: 'Not found' });
  //       return;
  //     }
  //     res.json(
  //       {
  //         "status": 200,
  //         "message": "all pets",
  //         "data": pet
  //       });
  //   } catch (e) {
  //     console.log(`api, ${e}`);
  //     res.status(500).json({
  //       status: 404,
  //       message: "error",
  //       error: e
  //     });
  //   }
  // }

  static async apiGetPetByUuid(req, res, next) {
    try {
      let uuid = req.params.uuid || {};
      let pet = await PetsDAO.getPetByUuid(uuid);
      if (!pet) {
        res.status(404).json({
          status: 404,
          message: 'Not found',
        });
        return;
      }
      res.json({
        status: 200,
        message: 'pet',
        data: pet,
      });
    } catch (e) {
      // console.log(`api, ${e}`);
      res.status(500).json({
        status: 404,
        message: 'error',
        error: e,
      });
    }
  }

  static async apiGetPetBreeds(req, res, next) {
    try {
      let breeds = await PetsDAO.getBreeds();
      res.json(breeds);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }

  static async apiPostPet(req, res, next) {
    try {
      const newPet = {
        ownerId: req.body.ownerId,
        petSpice: req.body.petSpice,
        name: req.body.name,
        age: req.body.age,
        photo: req.body.photo,
        breed: req.body.breed,
        color: req.body.color,
        gender: req.body.gender,
        isCastrated: req.body.isCastrated,
        isVaccinated: req.body.isVaccinated,
        isFleaTreated: req.body.isFleaTreated,
        weight: req.body.weight,
        fears: req.body.fears,
        diseases: req.body.diseases,
        createdAt: new Date(),
      };

      const petResponse = await PetsDAO.addPet(newPet);

      res.json({
        status: 200,
        message: 'New pet added',
        mongodb_response: petResponse,
        data: { _id: petResponse.insertedId, ...newPet },
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
