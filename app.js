require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const flash = require('connect-flash');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/tickets');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Session management
app.use(
    session({
        secret: process.env.SESSION_SECRET, // Use the session secret from .env
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI, // Use the MongoDB URI from .env
            collectionName: 'sessions',
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
            httpOnly: true,
        },
    })
);

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport); // Custom Passport configuration

// Flash messages
app.use(flash());

// Global variables (flash messages and user data)
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currUser = req.user;
    next();
});

// Routes
app.use('/api/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);

// Start the server
const PORT = process.env.PORT || 3030; // Use the port from .env
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
