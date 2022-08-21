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
    res.json(response);
  }
  static async apiGetPetById(req, res, next) {
    try {
      let id = req.params.id || {};
      let pet = await PetsDAO.getPetById(id);
      if (!pet) {
        res.status(404).json({ error: 'Not found' });
        return;
      }
      res.json(pet);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
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
}
