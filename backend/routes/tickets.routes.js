// backend/routes/tickets.routes.js
const express = require('express');
const router = express.Router();
const { getTickets } = require('../controllers/tickets.controller');

// GET /api/tickets
router.get('/', getTickets);

module.exports = router;