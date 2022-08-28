import app from './server.js';
import dotenv from 'dotenv';
import mongodb from 'mongodb';
import petsDAO from './dao/petsDAO.js';
import eventsDAO from './dao/eventsDAO.js';

dotenv.config();
const port = process.env.PORT;
const MongoClient = mongodb.MongoClient;

MongoClient.connect(process.env.MEOWTIME_DB_URI, {
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await petsDAO.injectDB(client);
    await eventsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}...`);
    });
  });
