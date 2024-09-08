const express = require('express');
const indexRouter = require('./routes/indexRoute.js');
const newMessageRouter = require('./routes/newMessageRouter.js');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('This middleware will always run!');
  next();
}); 

app.use('/', indexRouter);
app.use('/new', newMessageRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));