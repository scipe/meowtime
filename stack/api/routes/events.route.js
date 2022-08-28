import express from 'express';
import eventsCtrl from '../controllers/events.controller.js';
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

router.route('/api/events').get(eventsCtrl.apiGetEvents);
router.route('/api/events/:uuid').get(eventsCtrl.apiGetEventByUuid);
router.route('/api/events').post(checkJwt, eventsCtrl.apiPostEvent);

export default router;
