const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RepoSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Repo = mongoose.model("Repo", RepoSchema);

module.exports = Repo;