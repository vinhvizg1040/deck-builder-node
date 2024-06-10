const express = require('express');
const cardRoutes = require('./routes/cardRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/cards', cardRoutes);

module.exports = app;
