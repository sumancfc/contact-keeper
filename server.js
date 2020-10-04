const express = require("express");
require("dotenv").config;
const connectDB = require("./database");

const app = express();

//Connect DB
connectDB();

//Middleware
app.use(express.json({ extended: false }));

//Routes
app.use("/api/users", require("./routes/users.js"));
app.use("/api/users", require("./routes/auth.js"));
app.use("/api/contacts", require("./routes/contacts.js"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server starts at port ${PORT}`);
});
