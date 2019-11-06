const router = require("express").Router();

// Register Routes
router.get("/register", (req, res) => {
    res.send("Register");
})

router.post("/register", (req, res) => {
    res.send("Post Register (when submitting a registration of user");
})

// Login Routes
router.get("/login", (req, res) => {
    res.send("Login Page");
})

router.post("/login", (req, res) => {
    res.send("Post Login, user is logged in");
})

// Logout Route
router.get("/logout", (req, res) => {
    //req.logOut();
    res.send("Logout completed");
})


module.exports = router;