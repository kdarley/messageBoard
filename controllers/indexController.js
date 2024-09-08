const asyncHandler = require("express-async-handler");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];


const getIndex = asyncHandler(async (req, res) => {
    res.send("Hello from the message board app! This is the index page.");
    next();
});

const getMessages = asyncHandler(async (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
    // next();
});


module.exports = {getIndex, getMessages};