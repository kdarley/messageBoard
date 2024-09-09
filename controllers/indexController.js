const asyncHandler = require("express-async-handler");
const { getAllMessages } = require("../utils/newPost.js"); // Utility to fetch messages dynamically

const getMessages = asyncHandler(async (req, res) => {
    const messages = await getAllMessages(); // Fetch messages from the JSON file
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = { getMessages };
