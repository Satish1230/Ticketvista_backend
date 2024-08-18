const Ticket = require('../models/ticket');

// Issue a new ticket
exports.issueTicket = async (req, res) => {
    try {
        const { eventName, eventDate, ticketNumber, time, location, eventImage, email, venue } = req.body;

        // Create a new ticket with the email included
        const newTicket = new Ticket({ eventName, eventDate, ticketNumber, eventImage, email, time, location, venue });
        await newTicket.save();

        res.status(201).json({ message: 'Ticket issued successfully', ticket: newTicket });
    } catch (error) {
        console.error('Error issuing ticket:', error);
        res.status(500).json({ error: 'Error issuing ticket' });
    }
};


exports.getTickets = async (req, res) => {
    try {
        const { email } = req.body;
        // console.log(req.body);

        const tickets = await Ticket.find({ 'email': email });
        res.status(200).json(tickets);
    } catch (error) {
        console.error('Error retrieving tickets:', error);
        res.status(500).json({ error: 'Error retrieving tickets' });
    }
};

