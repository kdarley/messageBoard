const asyncHandler = require("express-async-handler");
const newPost = require("../utils/newPost.js");


const getForm = asyncHandler(async (req, res) => {
    res.render("form", { title: "Create Message" });
});

const postForm = asyncHandler(async (req, res) => {
    data = {
        "text": req.body.text,
        "user": req.body.user,
        "added" : new Date()
    }
     await newPost.writeEntry(data);
     console.log("Data written to file");
     res.redirect("/");
});




module.exports = {getForm, postForm};