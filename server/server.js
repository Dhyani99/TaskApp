const express = require("express");
const connectDB = require("./db/conn.js");
const mongoose = require("mongoose");
const cors = require("cors");

// express
const app = express();

app.use(cors());

//connect to database
connectDB();

app.use(express.json());
app.use("/api/tasks", require("./routes/taskRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
