require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const { errors } = require('celebrate');
const NotFoundError = require('./errors/not-found-err');

// const auth = require('./middlewares/auth');

const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');
const { errorMiddleware } = require('./middlewares/error');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const { createUser, login } = require('./controllers/users');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(requestLogger);

app.post('/signin', login);
app.post('/signup', createUser);

// app.use(auth);

app.use('/', usersRouter);
app.use('/', cardsRouter);

app.use(errorLogger);

app.use(errors());

app.use(() => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`); // eslint-disable-line
});
