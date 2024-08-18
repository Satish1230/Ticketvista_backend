const express = require('express');
const { issueTicket, getTickets, getTicketById, deleteTicket } = require('../controllers/ticketController');
const router = express.Router();

// Issue a ticket
router.post('/issue-ticket', issueTicket);

// Retrieve all tickets
router.post('/get-tickets', getTickets);





module.exports = router;
