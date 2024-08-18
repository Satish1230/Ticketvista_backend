const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    eventDate: { type: String, required: true },
    ticketNumber: { type: String, required: true },
    eventImage: { type: String, required: true },
    email: { type: String, required: true },
    venue: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
