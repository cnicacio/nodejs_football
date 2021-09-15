const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  foundationYear: {
    type: Number,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  league: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Teams", teamSchema);