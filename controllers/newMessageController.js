const asyncHandler = require("express-async-handler");


const createMessage = asyncHandler(async (req, res) => {
    res.render("form", { title: "Create Message" });
});



module.exports = {createMessage};