import BidsDAO from '../dao/bidsDAO.js';
import { v4 as uuid_v4 } from 'uuid';

export default class BidsController {
  static async apiGetBids(req, res, next) {
    const bidsPerPage = req.query.bidsPerPage ? parseInt(req.query.bidsPerPage, 10) : 1000;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0; // page number

    delete req.query.bidsPerPage;
    delete req.query.page;

    let filters = { ...req.query };

    const { bidsList, totalNumBids } = await BidsDAO.getBids({
      filters,
      page,
      bidsPerPage,
    });

    let response = {
      page: page,
      filters: filters,
      entries_per_page: bidsPerPage,
      total_results: totalNumBids,
      bids: bidsList,
    };
    res.json({
      status: 200,
      message: 'all bids',
      data: response,
    });
  }

  static async apiGetBidByUuid(req, res, next) {
    try {
      let uuid = req.params.uuid || {};
      let bid = await BidsDAO.getBidByUuid(uuid);
      if (!bid) {
        res.status(404).json({
          status: 404,
          message: 'Not found',
        });
        return;
      }
      res.json({
        status: 200,
        message: 'bid',
        data: bid,
      });
    } catch (e) {
      res.status(500).json({
        status: 404,
        message: 'error',
        error: e,
      });
    }
  }

  static async apiPostBid(req, res, next) {
    try {
      const newBid = {
        uuid: uuid_v4(),
        auctionId: req.body.auctionId,
        userId: req.body.userId,
        status: 'open',
        price: +req.body.price,
        createdAt: new Date(),
      };

      const bidResponse = await BidsDAO.addBid(newBid);

      res.json({
        status: 200,
        message: 'New bid added',
        mongodb_response: bidResponse,
        data: { _id: bidResponse.insertedId, ...newBid },
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
