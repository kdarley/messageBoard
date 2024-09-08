const asyncHandler = require("express-async-handler");


const getIndex = asyncHandler(async (req, res) => {

    res.send("Hello from the message board app!");
});


module.exports = {getIndex};