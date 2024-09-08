const express = require('express');
const indexRouter = require('./routes/indexRoute.js');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('This middleware will always run!');
  next();
}); 

app.use('/', indexRouter);
