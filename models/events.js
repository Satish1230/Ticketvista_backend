const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],  // Changed to an array of strings
        required: true,
    },
    speakers: {
        type: [String],
        required: true,
    },
    date: {
        type: Date,  // Changed to a Date object
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
