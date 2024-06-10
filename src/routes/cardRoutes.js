const express = require('express');
const cardController = require('../controllers/cardController');

const router = express.Router();

router.get('/', cardController.getCards);

module.exports = router;
