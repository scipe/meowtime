import express from 'express';
import petsRoutes from './routes/pets.route.js';
import eventsRoutes from './routes/events.route.js';
import reviewsRoutes from './routes/reviews.route.js';
import auctionsRoutes from './routes/auctions.route.js';
import bidsRoutes from './routes/bids.route.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(petsRoutes);
app.use(eventsRoutes);
app.use(reviewsRoutes);
app.use(auctionsRoutes);
app.use(bidsRoutes);

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === 'UnauthorizedError' || err.name === 'InvalidTokenError') {
    res.status(401).json({
      status: '401',
      message: err.message,
      error: err.name + ': ' + err.message,
    });
    return;
  } else {
    res.status(200).json({
      status: '200',
      message: err.message,
      error: err.name + ': ' + err.message,
    });
  }
});

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

app.get('*', (req, res) =>
  res.status(404).json({
    status: '404',
    message: req.protocol + '://' + req.get('host') + req.originalUrl + ' not found',
    url: req.protocol + '://' + req.get('host') + req.originalUrl,
    error: 'Not found',
  })
);

export default app;
