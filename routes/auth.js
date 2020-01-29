const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const passport = require("passport");

const registerSchema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_.]+$)/).trim().min(2).max(10).required(),
    password: Joi.string().trim().min(8).required()
});


// Register Routes
router.get("/register", (req, res) => {
    res.render("auth/register");
})

router.post("/register", (req, res) => {
    //Fix flash message
    const validateUser = {
        username: req.body.username,
        password: req.body.password,
    }
    const result = Joi.validate(validateUser, registerSchema);
    if (result.error == null) {
        User.findOne({ username: req.body.username }).then(foundUser => {
            if (foundUser) {
                res.send("User already exist!");
            } else {
                bcrypt.hash(req.body.password, 12, (err, hashedPw) => {
                    const user = {
                        name: req.body.name,
                        lastname: req.body.lastname,
                        username: req.body.username,
                        password: hashedPw,
                    }
                    new User(user).save().then(newUser => {
                        console.log(user)
                        res.redirect("/auth/login");
                    })
                })

            }
        })
    }
    else {
        if (result.error.details[0].message.includes("password")) {
            res.send("Invalid password");
        } else {
            res.send("Invalid Username")
        }
    }



})

// Login Routes
router.get("/login", (req, res) => {
    res.render("auth/login");
})

router.post("/login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/ideas",
        failureRedirect: "/auth/login",
        //failureFlash: true
    })(req, res, next);

})

// Logout Route
router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/");
})


module.exports = router;