const asyncHandler = require("express-async-handler");


const getIndex = asyncHandler(async (req, res) => {
    res.send("Hello from the message board app! This is the index page.");
});


module.exports = {getIndex};