const router = require("express").Router();
const mongoose = require("mongoose");
const Idea = mongoose.model("ideas");
const Comment = mongoose.model("comments");
const User = mongoose.model("users");
const { isLoggedIn, isCommentOwner } = require("../helpers/auth");


// IDEAS ROUTES
router.get("/", (req, res) => {
    Idea.find().sort({ date: "desc" }).then(ideas => {
        console.log(ideas);
        res.render("ideas/index", {
            ideas: ideas,
            active: "all"
        })
    })

})
router.get("/sports", (req, res) => {
    Idea.find({ topic: "Sports" }).sort({ date: "desc" }).then(ideas => {

        res.render("ideas/index", {
            ideas: ideas,
            active: "sports"

        })
    })
})
router.get("/tech", (req, res) => {
    Idea.find({ topic: "Tech" }).sort({ date: "desc" }).then(ideas => {

        res.render("ideas/index", {
            ideas: ideas,
            active: "tech"
        })
    })
})
router.get("/video", (req, res) => {
    Idea.find({ topic: "Video" }).sort({ date: "desc" }).then(ideas => {

        res.render("ideas/index", {
            ideas: ideas,
            active: "video"
        })
    })
})
router.get("/gaming", (req, res) => {
    Idea.find({ topic: "Gaming" }).sort({ date: "desc" }).then(ideas => {

        res.render("ideas/index", {
            ideas: ideas,
            active: "gaming"
        })
    })
})
router.get("/other", (req, res) => {
    Idea.find({ topic: "Other" }).sort({ date: "desc" }).then(ideas => {

        res.render("ideas/index", {
            ideas: ideas,
            active: "other"
        })
    })
})


router.get("/my", isLoggedIn, (req, res) => {
    // Has to be logged in
    res.send("My Ideas");
})

router.get("/user/:id", (req, res) => {
    var owner = {}
    User.findOne({ _id: req.params.id }).then(user => {
        owner = user;
    });

    Idea.find({ "author.id": req.params.id }).sort({ thumbs: "desc" }).then(ideas => {
        res.render("ideas/user", {
            ideas: ideas,
            owner: owner
        })
    })
})

router.get("/add", (req, res) => {
    // Has to be logged in
    res.render("ideas/add");
})

router.get("/edit/:id", isLoggedIn, (req, res) => {
    // Has to be logged in & be owner of idea
    Idea.findOne({
        _id: req.params.id
    }).then(idea => {
        if (idea && idea.author.id.equals(req.user._id)) {

            res.render("ideas/edit", {
                idea: idea
            })
        } else {
            console.log("WHAT?");

            res.redirect("/");
        }
    })

})

router.get("/show/:id", (req, res) => {
    // Idea has to be public

    Idea.findOne({ _id: req.params.id }).populate({ path: "comments", options: { sort: { date: "desc" } } }).then(idea => {
        if (idea) {

            Idea.find({ topic: idea.topic }).where("_id").ne(idea._id).limit(3).then(ideas => {

                idea.toIdeas = ideas;
            })


            if (req.user) {
                const index = idea.thumbs.thumbersUp.indexOf(req.user.username);

                if (index > -1) {
                    res.render("ideas/show", {
                        idea: idea,
                        up: true,


                    })
                } else if (idea.thumbs.thumbersDown.indexOf(req.user.username) > -1) {
                    res.render("ideas/show", {
                        idea: idea,
                        down: true,


                    })
                } else {
                    res.render("ideas/show", {
                        idea: idea,



                    })
                }
            } else {

                res.render("ideas/show", {
                    idea: idea,



                })
            }
        } else {
            res.redirect("/");
        }
    })
})

router.get("/:id/up", isLoggedIn, (req, res) => {
    Idea.findOne({ _id: req.params.id }).then(idea => {
        if (idea) {
            if (idea.thumbs.thumbersUp.indexOf(req.user.username) > -1) {
                res.redirect(`/ideas/show/${req.params.id}`);
            }
            else {
                idea.thumbs.thumbs++;
                idea.thumbs.thumbersUp.push(req.user.username); /// Check if Work only can have one, do same first on down
                const index = idea.thumbs.thumbersDown.indexOf(req.user.username);
                if (index > -1) {
                    idea.thumbs.thumbersDown.splice(index, 1);
                }
                idea.save().then(i => {
                    res.redirect(`/ideas/show/${req.params.id}`);
                })
            }
        } else {
            console.log("No Idea found");
            res.redirect("/ideas");
        }
    })
})
router.get("/:id/down", isLoggedIn, (req, res) => {
    Idea.findOne({ _id: req.params.id }).then(idea => {
        if (idea) {
            if (idea.thumbs.thumbersDown.indexOf(req.user.username) > -1) {
                res.redirect(`/ideas/show/${req.params.id}`);
            }
            else {
                idea.thumbs.thumbs--;
                idea.thumbs.thumbersDown.push(req.user.username); /// Check if Work only can have one, do same first on down
                const index = idea.thumbs.thumbersUp.indexOf(req.user.username);
                if (index > -1) {
                    idea.thumbs.thumbersUp.splice(index, 1);
                }
                idea.save().then(i => {
                    res.redirect(`/ideas/show/${req.params.id}`);
                })
            }
        } else {
            console.log("No Idea found");
            res.redirect("/ideas");
        }
    })
})

router.post("/", isLoggedIn, (req, res) => {
    // Has to be logged in

    if (req.body.title.trim() == "" && req.body.commentbody.trim() == "") {
        res.send("No empty fields please")
    } else {
        const idea = {
            topic: req.body.topic,
            title: req.body.title,
            body: req.body.commentbody,
            author: {
                id: req.user.id,
                username: req.user.username
            },
            thumbs: {
                thumbersUp: req.user.username
            }
        }
        new Idea(idea).save().then(newIdea => {
            console.log(newIdea)
            res.redirect("/ideas");
        })
    }

})

router.delete("/:id", isLoggedIn, (req, res) => {
    // Has to be logged in & owner of Idea
    Idea.findOne({ _id: req.params.id }).then(idea => {
        if (idea && idea.author.id.equals(req.user._id)) {
            idea.comments.forEach(commentId => {
                console.log(commentId)
                Comment.remove({ _id: commentId }).then(() => {
                    console.log("Comment Removed")
                })
            })
            Idea.remove({ _id: req.params.id }).then(() => {
                console.log("idea removed");
            });

        }
        res.redirect("/ideas");
    })



})

router.put("/:id", isLoggedIn, (req, res) => {
    // Has to be logged in & owner of Idea
    Idea.findOne({ _id: req.params.id }).then(idea => {
        if (idea && idea.author.id.equals(req.user._id)) {
            idea.topic = req.body.topic;
            idea.title = req.body.title;
            idea.body = req.body.commentbody;
            idea.save().then((nIdea) => {
                res.redirect(`/ideas/show/${req.params.id}`);
            })

        } else {
            res.redirect("/ideas");
        }
    })
})

// Comments 
router.post("/:id/comment", isLoggedIn, (req, res) => {
    // Has to be logged in & Allow comments
    const comment = {
        body: req.body.commentbody,
        author: {
            id: req.user.id,
            username: req.user.username
        },
        thumbs: {
            thumbersUp: req.user.username
        }
    }
    new Comment(comment).save().then(newComment => {
        Idea.findOne({ _id: req.params.id }).then(idea => {
            idea.comments.push(newComment._id);
            idea.save().then(nIdea => {

                res.redirect(`/ideas/show/${req.params.id}`);
            })
        })
    })

})

router.delete("/:id/comment/:comment_id", isLoggedIn, isCommentOwner, (req, res) => {
    // Has to be logged in & owner of comment
    // Maybe idea owner can delete too
    Idea.findOne({ _id: req.params.id }).then(idea => {
        if (!idea) {
            console.log("IDK WHAT YOU DOING");
            res.redirect("/ideas");
        } else {
            const index = idea.comments.indexOf(req.params.comment_id);
            if (index > -1) {
                Comment.findByIdAndDelete(req.params.comment_id, (err, comment) => {
                    if (!err) {
                        idea.comments.splice(index, 1);
                        idea.save().then((ide => {
                            res.redirect(`/ideas/show/${req.params.id}`);
                        }))
                    } else {
                        console.log("Something went Wrong....")
                        res.redirect("/");
                    }
                });


            } else {
                console.log("Not sure what you are doing here...")
                res.redirect(`/ideas/show/${req.params.id}`);
            }
        }
    })
    /* Comment.findByIdAndDelete(req.params.comment_id, (err, comment) => {
        if (!err) {
            console.log("comment deleted ", comment);
            Idea.findOne({ _id: req.params.id }).then(idea => {

                if (!idea) {
                    console.log("IDK WHAT YOU DOING");
                    res.redirect("/ideas");
                } else {
                    const index = idea.comments.indexOf(req.params.comment_id);
                    if (index > -1) {
                        idea.comments.splice(index, 1);
                        idea.save().then((ide => {
                            res.redirect(`/ideas/show/${req.params.id}`);
                        }))
                    } else {
                        console.log("Not sure what you are doing here...")
                        res.redirect(`/ideas/show/${req.params.id}`);
                    }
                }
            })
        } else {
            console.log("WHAT? NO COMMENT...");
            res.redirect(`/ideas/show/${req.params.id}`);
        }
    }) */
})

router.put("/:id/comment/:comment_id", isLoggedIn, isCommentOwner, (req, res) => {
    // Has to be logged in & owner of comment
    Idea.findOne({ _id: req.params.id }).then(idea => {

        if (!idea) {
            console.log("IDK WHAT YOU DOING");
            res.redirect("/ideas");
        } else {
            const index = idea.comments.indexOf(req.params.comment_id);
            if (index > -1) {
                Comment.findOne({ _id: req.params.comment_id }).then(comment => {
                    if (comment) {
                        comment.body = req.body.commentbody;
                        comment.save().then(ncom => {
                            res.redirect(`/ideas/show/${req.params.id}`);

                        })
                    } else {
                        console.log("Something went wrong...")
                        res.redirect("/");
                    }
                })

            } else {
                console.log("Not sure what you are doing here...")
                res.redirect(`/ideas`);
            }
        }

        /* Comment.findOne({ _id: req.params.comment_id }).then(comment => {
            if (comment) {
                Idea.findOne({ _id: req.params.id }).then(idea => {
     
                    if (!idea) {
                        console.log("IDK WHAT YOU DOING");
                        res.redirect("/ideas");
                    } else {
                        const index = idea.comments.indexOf(req.params.comment_id);
                        if (index > -1) {
                            comment.body = req.body.commentbody;
                            comment.save().then(ncom => {
                                res.redirect(`/ideas/show/${req.params.id}`);
     
                            })
     
                        } else {
                            console.log("Not sure what you are doing here...")
                            res.redirect(`/ideas`);
                        }
                    }
                })
            } else {
                console.log("WHAT? NO COMMENT...");
                res.redirect(`/ideas`);
            }
        }) */


    })
})

router.get("/:id/comment/:comment_id/up", isLoggedIn, (req, res) => {
    Idea.findOne({ _id: req.params.id }).then(idea => {
        if (idea) {
            const comIndex = idea.comments.indexOf(req.params.comment_id);
            if (comIndex > -1) {
                Comment.findOne({ _id: req.params.comment_id }).then(comment => {
                    if (comment.thumbs.thumbersUp.indexOf(req.user.username) > -1) {
                        res.redirect(`/ideas/show/${req.params.id}`);
                    } else {
                        comment.thumbs.thumbs++;
                        comment.thumbs.thumbersUp.push(req.user.username);
                        const index = comment.thumbs.thumbersDown.indexOf(req.user.username);
                        if (index > -1) {
                            comment.thumbs.thumbersDown.splice(index, 1);
                        }
                        comment.save().then(com => {
                            res.redirect(`/ideas/show/${req.params.id}`);
                        })

                    }

                })
            } else {
                console.log("No comment found on this idea with that id")
                res.redirect("/")
            }
        } else {
            console.log("No Idea found");
            res.redirect("/ideas");
        }
    })
})

router.get("/:id/comment/:comment_id/down", isLoggedIn, (req, res) => {
    Idea.findOne({ _id: req.params.id }).then(idea => {
        if (idea) {
            const comIndex = idea.comments.indexOf(req.params.comment_id);
            if (comIndex > -1) {
                Comment.findOne({ _id: req.params.comment_id }).then(comment => {
                    if (comment.thumbs.thumbersDown.indexOf(req.user.username) > -1) {
                        res.redirect(`/ideas/show/${req.params.id}`);
                    } else {
                        comment.thumbs.thumbs--;
                        comment.thumbs.thumbersDown.push(req.user.username);
                        const index = comment.thumbs.thumbersUp.indexOf(req.user.username);

                        if (index > -1) {
                            comment.thumbs.thumbersUp.splice(index, 1);
                        }
                        comment.save().then(com => {
                            res.redirect(`/ideas/show/${req.params.id}`);
                        })

                    }

                })
            } else {
                console.log("No comment found on this idea with that id")
                res.redirect("/")
            }
        } else {
            console.log("No Idea found");
            res.redirect("/ideas");
        }
    })
})

module.exports = router;
