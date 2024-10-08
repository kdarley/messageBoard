// initialize the database with some dummy data
const { createData } = require('./utils/createData.js');
createData();


const express = require('express');
const indexRouter = require('./routes/indexRoute.js');
const newMessageRouter = require('./routes/newMessageRouter.js');

const app = express();

// configure views
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// styles path
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('This middleware will always run!');
  next();
}); 

app.use('/', indexRouter);
app.use('/new', newMessageRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));