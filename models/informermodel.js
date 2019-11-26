const mongoose = require("mongoose");

/* Creating a Database Schema....schema should be the same format as req.body */
const registerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: "Please Enter first name"
  },
  lastname: String,
  gender: String,
  country: String,
  city: String
});

//create a model
module.exports = mongoose.model("Register", registerSchema);
