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

  static async apiPostPet(req, res, next) {
    try {
      const ownerId = req.body.ownerId;
      const petSpice = req.body.petSpice;
      const name = req.body.name;
      const age = req.body.age;
      const photo = req.body.photo;
      const breed = req.body.breed;
      const color = req.body.color;
      const gender = req.body.gender;
      const isCastrated = req.body.isCastrated;
      const isVaccinated = req.body.isVaccinated;
      const isFleaTreated = req.body.isFleaTreated;
      const weight = req.body.weight;
      const fears = req.body.fears;
      const diseases = req.body.diseases;
      const createdAt = new Date();
      console.log(req.body);

      const PetResponse = await PetsDAO.addPet(
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
      );

      res.json({ status: PetResponse });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
