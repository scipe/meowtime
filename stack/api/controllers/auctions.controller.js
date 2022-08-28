import AuctionsDAO from '../dao/auctionsDAO.js';
import { v4 as uuid_v4 } from 'uuid';

export default class AuctionsController {
  static async apiGetAuctions(req, res, next) {
    const auctionsPerPage = req.query.auctionsPerPage
      ? parseInt(req.query.auctionsPerPage, 10)
      : 1000;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0; // page number

    delete req.query.auctionsPerPage;
    delete req.query.page;

    let filters = { ...req.query };

    const { auctionsList, totalNumAuctions } = await AuctionsDAO.getAuctions({
      filters,
      page,
      auctionsPerPage,
    });

    let response = {
      page: page,
      filters: filters,
      entries_per_page: auctionsPerPage,
      total_results: totalNumAuctions,
      auctions: auctionsList,
    };
    res.json({
      status: 200,
      message: 'all auctions',
      data: response,
    });
  }

  static async apiGetAuctionByUuid(req, res, next) {
    try {
      let uuid = req.params.uuid || {};
      let auction = await AuctionsDAO.getAuctionByUuid(uuid);
      if (!auction) {
        res.status(404).json({
          status: 404,
          message: 'Not found',
        });
        return;
      }
      res.json({
        status: 200,
        message: 'auction',
        data: auction,
      });
    } catch (e) {
      res.status(500).json({
        status: 404,
        message: 'error',
        error: e,
      });
    }
  }

  static async apiPostAuction(req, res, next) {
    try {
      const newAuction = {
        uuid: uuid_v4(),
        eventId: req.body.eventId,
        status: 'open',
        startPrice: +req.body.startPrice,
        currentPrice: +req.body.startPrice,
        createdAt: new Date(),
      };

      const auctionResponse = await AuctionsDAO.addAuction(newAuction);

      res.json({
        status: 200,
        message: 'New auction added',
        mongodb_response: auctionResponse,
        data: { _id: auctionResponse.insertedId, ...newAuction },
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
