import express from 'express';
import pets from './routes/pets.route.js';
import { expressjwt } from 'express-jwt';
import jwks from 'jwks-rsa';
import dotenv from 'dotenv';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';
import cors from 'cors';

dotenv.config();
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

if (!process.env.ISSUER_BASE_URL || !process.env.AUDIENCE) {
  throw 'Make sure you have ISSUER_BASE_URL, and AUDIENCE in your .env file';
}

app.use(cors(corsOptions));
const checkJwt = auth();

const jwtCheck = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://meowtime.eu.auth0.com/.well-known/jwks.json',
  }),
  audience: 'api.meowtime.com',
  issuer: 'https://meowtime.eu.auth0.com/',
  algorithms: ['RS256'],
});

app.use(jwtCheck);
app.use(express.json());

app.use('/', pets);
app.use('/version/', pets);
app.use('/authorizedpets/', pets);
app.use('/notauthorizedpets/', pets);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

export default app;
