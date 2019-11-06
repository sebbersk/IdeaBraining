const express = require("express");

const indexRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");

const app = express();



app.use("/", indexRoutes);
app.use("/auth", authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listnening on port ${port}`);
})  