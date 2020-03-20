const router = require("express").Router();
const mongoose = require("mongoose");
const Idea = mongoose.model("ideas");

router.get("/", (req, res) => {
    Idea.find().sort({ thumbs: "desc" }).limit(3).then(ideas =>
        res.render("index/index", {
            ideas: ideas
        }));
})

router.get("/about", (req, res) => {
    res.render("index/about");
})

module.exports = router;