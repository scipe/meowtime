import ReviewsDAO from '../dao/reviewsDAO.js';
import { v4 as uuid_v4 } from 'uuid';

export default class ReviewsController {
  static async apiGetReviews(req, res, next) {
    const reviewsPerPage = req.query.reviewsPerPage ? parseInt(req.query.reviewsPerPage, 10) : 1000;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0; // page number

    delete req.query.reviewsPerPage;
    delete req.query.page;

    let filters = { ...req.query };

    const { reviewsList, totalNumReviews } = await ReviewsDAO.getReviews({
      filters,
      page,
      reviewsPerPage,
    });

    let response = {
      page: page,
      filters: filters,
      entries_per_page: reviewsPerPage,
      total_results: totalNumReviews,
      reviews: reviewsList,
    };
    res.json({
      status: 200,
      message: 'all reviews',
      data: response,
    });
  }

  static async apiGetReviewByUuid(req, res, next) {
    try {
      let uuid = req.params.uuid || {};
      let review = await ReviewsDAO.getReviewByUuid(uuid);
      if (!review) {
        res.status(404).json({
          status: 404,
          message: 'Not found',
        });
        return;
      }
      res.json({
        status: 200,
        message: 'review',
        data: review,
      });
    } catch (e) {
      res.status(500).json({
        status: 404,
        message: 'error',
        error: e,
      });
    }
  }

  static async apiPostReview(req, res, next) {
    try {
      const newReview = {
        uuid: uuid_v4(),
        reviewerId: req.body.reviewerId,
        petId: req.body.petId,
        review: req.body.review,
        rate: req.body.rate,
        createdAt: new Date(),
      };

      const reviewResponse = await ReviewsDAO.addReview(newReview);

      res.json({
        status: 200,
        message: 'New review added',
        mongodb_response: reviewResponse,
        data: { _id: reviewResponse.insertedId, ...newReview },
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
