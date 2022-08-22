import express from 'express';
import pack from '../package.json' assert { type: 'json' };
import petsCtrl from '../controllers/pets.controller.js';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const corsOptions = {
  origin: 'http://localhost:3000',
};

if (!process.env.ISSUER_BASE_URL || !process.env.AUDIENCE) {
  throw 'Make sure you have ISSUER_BASE_URL, and AUDIENCE in your .env file';
}

const router = express.Router();
const checkJwt = auth();

router.route('/api').get(petsCtrl.apiGetPets);
router.route('/api/public').get(function (req, res) {
  res.json({
    message: "Hello from a public endpoint! You don't need to be authenticated to see this.",
  });
});

router.route('/api/pets').get(petsCtrl.apiGetPets);
router.route('/api/pet/:id').get(petsCtrl.apiGetPetById);
router.route('/api/pet').post(petsCtrl.apiPostPet);

router.get('/api/private', checkJwt, function (req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.',
  });
});

router.get('/api/private-scoped', checkJwt, requiredScopes('slots:read'), function (req, res) {
  res.json({
    message:
      'Hello from a private endpoint! You need to be authenticated and have a scope of [slots:read] to see this.',
  });
});

router.route('/api/version').get((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      status: 200,
      message: 'version',
      data: { api_version: pack.version },
    })
  );
});

router.get('*', (req, res) =>
  res.status(404).json({
    url: req.protocol + '://' + req.get('host') + req.originalUrl,
    error: 'not found',
  })
);

export default router;
