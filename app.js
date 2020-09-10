const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');

const auth = require('./middlewares/auth');

const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');
const { errorMiddleware } = require('./middlewares/error')

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

app.post('/signin', login);
app.post('/signup', createUser);

// app.use(auth);

app.use('/', usersRouter);
app.use('/', cardsRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`); // eslint-disable-line
});
