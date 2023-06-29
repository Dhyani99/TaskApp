const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User id field is required"],
  },
  title: {
    type: String,
    required: [true, "Title field is required"],
  },
  details: {
    type: String,
  },
  priority: {
    type: String,
    required: [true, "Priority field is required"],
  },
  status: {
    type: String,
    required: [true, "Status field is required"],
  },
  deadline: {
    type: Date,
  },
});

const Task = mongoose.model("task", TaskSchema);

module.exports = Task;
