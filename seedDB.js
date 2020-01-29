const mongoose = require("mongoose");
const Idea = mongoose.model("ideas");
const Ideas = [
    {
        topic: "Sports",
        title: "GOAL!",
        body: "hjasdkola kasdkas kas kdlasdkaskdlaskdalsd jdksaj djskadj sajdksa jdksadj askdj kasjdask dj",
        date: Date.now(),
    },
    {
        topic: "Sports",
        title: "GOALIE!",
        body: "hjasdkola kasdkas kas kdlasdkaskdlaskdalsd jdksaj djskadj sajdksa jdksadj askdj kasjdask dj",
        date: Date.now(),
    },
    {
        topic: "Sports",
        title: "GOAL IN!",
        body: "hjasdkola kasdkas kas kdlasdkaskdlaskdalsd jdksaj djskadj sajdksa jdksadj askdj kasjdask dj",
        date: Date.now(),
    },
    {
        topic: "Sports",
        title: "GOAL DRAW!",
        body: "hjasdkola kasdkas kas kdlasdkaskdlaskdalsd jdksaj djskadj sajdksa jdksadj askdj kasjdask dj",
        date: Date.now(),
    }
]


module.exports = function () {
    Ideas.forEach(idea => {
        new Idea(idea).save().then(iidea => {
            // console.log(iidea);
        })
    })
}

