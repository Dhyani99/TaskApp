const express = require("express");
const connectDB = require("./db/conn.js");
const mongoose = require("mongoose");

// express
const app = express();

//connect to database
connectDB();

app.use(express.json());
app.use("/tasks", require("./routes/taskRoutes.js"));
app.use("/users", require("./routes/userRoutes.js"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
