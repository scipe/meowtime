import express from 'express';
import pack from '../package.json' assert { type: 'json' };
import petsCtrl from '../controllers/pets.controller.js';

const router = express.Router();

router.route('/').get(petsCtrl.apiGetPets);
router.route('/version').get((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      status: 200,
      message: 'version',
      data: { api_version: pack.version },
    })
  );
});

export default router;
