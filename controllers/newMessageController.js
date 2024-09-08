const asyncHandler = require("express-async-handler");


const createMessage = asyncHandler(async (req, res) => {
    res.send("Create a new message here!");
});


module.exports = {createMessage};