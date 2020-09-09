const usersRouter = require('express').Router();

const { getUsers, getUserById } = require('../controllers/users');

usersRouter.get('/users/:id', getUserById);

usersRouter.get('/users', getUsers);

module.exports = usersRouter;
