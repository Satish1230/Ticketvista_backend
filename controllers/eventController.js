const Event = require('../models/events');

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        console.error('Error retrieving events:', error);
        res.status(500).json({ error: 'Error retrieving events' });
    }
};

exports.createEvent = async (req, res) => {
    try {
        // Extract and convert the date from DD/MM/YYYY to YYYY-MM-DD
        if (req.body.date) {
            const [day, month, year] = req.body.date.split('/');
            req.body.date = `${year}-${month}-${day}`;
        }

        // Create a new event with the modified date
        const newEvent = new Event(req.body);
        // console.log(newEvent);

        // Save the new event to the database
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Error creating event' });
    }
};


exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ error: 'Error updating event' });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEvent = await Event.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ error: 'Error deleting event' });
    }
};

// New method to get events by user's email
exports.getEventsByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const events = await Event.find({ 'email': email });

        if (!events.length) {
            return res.status(404).json({ message: 'No events found for this user' });
        }

        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events by email:', error);
        res.status(500).json({ error: 'Error fetching events' });
    }
};
