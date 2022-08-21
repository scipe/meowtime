import express from 'express';
import pets from './routes/pets.route.js';
import { expressjwt } from 'express-jwt';
import jwks from 'jwks-rsa';

const app = express();

var jwtCheck = expressjwt({
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
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

export default app;
