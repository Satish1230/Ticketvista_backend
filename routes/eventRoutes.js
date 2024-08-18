const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Existing routes...
router.get('/', eventController.getEvents);
router.post('/', eventController.createEvent);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);



// New route to get events by user's email
router.post('/user/email', eventController.getEventsByEmail);


module.exports = router;
