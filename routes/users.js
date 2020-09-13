const usersRouter = require('express').Router();

const { getUsers, getUserById } = require('../controllers/users');
const { userIdCheck } = require('../middlewares/validation');

usersRouter.get('/users/:id', userIdCheck, getUserById);

usersRouter.get('/users', getUsers);

module.exports = usersRouter;
