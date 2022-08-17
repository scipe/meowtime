import express from 'express';
import pack from '../package.json' assert { type: 'json' };

const router = express.Router();

router.route('/').get((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      status: 200,
      message: 'root',
      data: {},
    })
  );
});
router.route('/version').get((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      status: 200,
      message: 'version',
      data: { api_version: pack.version },
    })
  );
});

export default router;
