const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: [true, "Title field is required"],
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
  },
  password: {
    type: String,
    required: [true, "Password field is required"],
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
