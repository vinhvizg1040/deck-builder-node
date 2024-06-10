const cards = require('../cards.json')
const filterCards = require('../utils/filterCards');

exports.filterCards = (params) => {
    return filterCards(cards.data, params);
};
