import EventsDAO from '../dao/eventsDAO.js';
import { v4 as uuid_v4 } from 'uuid';

export default class EventsController {
  static async apiGetEvents(req, res, next) {
    const eventsPerPage = req.query.eventsPerPage ? parseInt(req.query.eventsPerPage, 10) : 1000;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0; // page number

    delete req.query.eventsPerPage;
    delete req.query.page;

    let filters = { ...req.query };

    const { eventsList, totalNumEvents } = await EventsDAO.getEvents({
      filters,
      page,
      eventsPerPage,
    });

    let response = {
      page: page,
      filters: filters,
      entries_per_page: eventsPerPage,
      total_results: totalNumEvents,
      events: eventsList,
    };
    res.json({
      status: 200,
      message: 'all events',
      data: response,
    });
  }

  static async apiGetEventByUuid(req, res, next) {
    try {
      let uuid = req.params.uuid || {};
      let event = await EventsDAO.getEventByUuid(uuid);
      if (!event) {
        res.status(404).json({
          status: 404,
          message: 'Not found',
        });
        return;
      }
      res.json({
        status: 200,
        message: 'event',
        data: event,
      });
    } catch (e) {
      res.status(500).json({
        status: 404,
        message: 'error',
        error: e,
      });
    }
  }

  static async apiPostEvent(req, res, next) {
    try {
      const newEvent = {
        uuid: uuid_v4(),
        eventType: req.body.eventType,
        ownerId: req.body.ownerId,
        status: 'new',
        petId: req.body.petId,
        sitterId: req.body.sitterId,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        city: req.body.city,
        address: req.body.address,
        createdAt: new Date(),
      };

      const eventResponse = await EventsDAO.addEvent(newEvent);

      res.json({
        status: 200,
        message: 'New event added',
        mongodb_response: eventResponse,
        data: { _id: eventResponse.insertedId, ...newEvent },
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
