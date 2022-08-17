import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(express.json())

app.use("/", routes)
app.use("/version/", routes)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app