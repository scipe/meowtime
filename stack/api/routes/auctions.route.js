import express from 'express';
import auctionsCtrl from '../controllers/auctions.controller.js';
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

router.route('/api/auctions').get(auctionsCtrl.apiGetAuctions);
router.route('/api/auctions/:uuid').get(auctionsCtrl.apiGetAuctionByUuid);
router.route('/api/auctions').post(checkJwt, auctionsCtrl.apiPostAuction);

export default router;
