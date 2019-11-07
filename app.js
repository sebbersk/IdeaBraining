const express = require("express");
const exphbs = require("express-handlebars");

const indexRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
const ideasRoutes = require("./routes/ideas");

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/ideas", ideasRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listnening on port ${port}`);
})  