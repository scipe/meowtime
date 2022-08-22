import express from 'express';
import petsRoutes from './routes/pets.route.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(petsRoutes);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: err.name + ': ' + err.message });
  }
});

export default app;
