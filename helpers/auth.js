const mongoose = require("mongoose");
const Comment = mongoose.model("comments");
module.exports = {
    isLoggedIn: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        console.log(req.user);
        res.redirect("/");
    },
    isCommentOwner: function (req, res, next) {
        Comment.findOne({ _id: req.params.comment_id }).then(comment => {
            if (comment && comment.author.id.equals(req.user._id)) {
                next();
            } else {
                res.redirect("/");
            }
        })
    }
}