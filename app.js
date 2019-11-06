const express = require("express");

const indexRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
const ideasRoutes = require("./routes/ideas");

const app = express();



app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/ideas", ideasRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listnening on port ${port}`);
})  