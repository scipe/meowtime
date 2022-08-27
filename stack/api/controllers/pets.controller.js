import PetsDAO from '../dao/petsDAO.js';
import { v4 as uuid_v4 } from 'uuid';

export default class PetsController {
  static async apiGetPets(req, res, next) {
    const petsPerPage = req.query.petsPerPage ? parseInt(req.query.petsPerPage, 10) : 1000;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0; // page number

    delete req.query.petsPerPage;
    delete req.query.page;

    let filters = { ...req.query };

    const { petsList, totalNumPets } = await PetsDAO.getPets({
      filters,
      page,
      petsPerPage,
    });

    let response = {
      page: page,
      filters: filters,
      entries_per_page: petsPerPage,
      total_results: totalNumPets,
      pets: petsList,
    };
    res.json({
      status: 200,
      message: 'all pets',
      data: response,
    });
  }

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
        uuid: uuid_v4(),
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
