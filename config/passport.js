const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = mongoose.model("users");

module.exports = function (passport) {
    passport.use(new localStrategy({}, (username, password, done) => {
        // Look for Username in database 
        User.findOne({ username: username }).then(user => {
            if (!user) {
                return done(null, false);
            }
            // Match password with Bcrypt
            bcrypt.compare(password, user.password, (err, match) => {
                if (err) throw err;
                if (match) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            })
        })
    }));
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}