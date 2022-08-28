import express from 'express';
import reviewsCtrl from '../controllers/reviews.controller.js';
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

router.route('/api/reviews').get(reviewsCtrl.apiGetReviews);
router.route('/api/reviews/:uuid').get(reviewsCtrl.apiGetReviewByUuid);
router.route('/api/reviews').post(checkJwt, reviewsCtrl.apiPostReview);

export default router;
