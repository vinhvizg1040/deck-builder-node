const cardService = require('../services/cardService');

exports.getCards = (req, res) => {
    const params = req.query;
    const cards = cardService.filterCards(params);
    res.json(cards);
};
