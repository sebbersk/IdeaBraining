const router = require("express").Router();

// IDEAS ROUTES
router.get("/", (req, res) => {
    res.send("All of the public Ideas here");
})

router.get("/my", (req, res) => {
    // Has to be logged in
    res.send("My Ideas");
})

router.get("/user/:id", (req, res) => {
    res.send("User (id) Ideas");
})

router.get("/add", (req, res) => {
    // Has to be logged in
    res.send("Form to add Idea");
})

router.get("/edit/:id", (req, res) => {
    // Has to be logged in & be owner of idea
    res.send("Form to edit idea");
})

router.get("/show/:id", (req, res) => {
    // Idea has to be public
    res.send("Show specific idea, with comments if some");
})

router.post("/ideas", (req, res) => {
    // Has to be logged in
    res.send("Created Idea")
})

router.delete("/:id", (req, res) => {
    // Has to be logged in & owner of Idea
    res.send("Deleted");
})

router.put("/:id", (req, res) => {
    // Has to be logged in & owner of Idea
    res.send("Edited");
})

// Comments 
router.post("/:id/comment", (req, res) => {
    // Has to be logged in & Allow comments
    res.send("Added comment");
})

router.delete("/:id/comment/:comment_id", (req, res) => {
    // Has to be logged in & owner of comment
    // Maybe idea owner can delete too
    res.send("Deleted comment");
})

router.put("/:id/comment/:comment_id", (req, res) => {
    // Has to be logged in & owner of comment
    res.send("Edited comment");
})
module.exports = router;