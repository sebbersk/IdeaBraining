const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const methodOverride = require("method-override");
require("./models/User");
require("./models/Idea");
require("./models/Comment");





mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/ideabraining_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("Connected to DB");
    } else {
        console.log("Error: ", err);
    }
})


require("./config/passport")(passport);

const { activePage, truncate, stripTags, commentRatingUp, commentRatingDown, isCommentOwner, isIdeaOwner } = require("./helpers/hbs");
const app = express();
const indexRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
const ideasRoutes = require("./routes/ideas");

app.engine('handlebars', exphbs({
    helpers: {
        activePage: activePage,
        truncate: truncate,
        stripTags: stripTags,
        commentRatingUp: commentRatingUp,
        commentRatingDown: commentRatingDown,
        isCommentOwner: isCommentOwner,
        isIdeaOwner: isIdeaOwner
    },
    defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
})
app.use(methodOverride('_method'))

app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/ideas", ideasRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listnening on port ${port}`);
})  