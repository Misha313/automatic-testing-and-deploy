const cardsRouter = require('express').Router();
const { getCards, createCard, deleteCardById } = require('../controllers/cards');
const { createCardCheck, cardIdCheck } = require('../middlewares/validation');

cardsRouter.get('/cards', getCards);
cardsRouter.post('/cards', createCardCheck, createCard);
cardsRouter.delete('/cards/:cardId', cardIdCheck, deleteCardById);

module.exports = cardsRouter;
