// backend/models/Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: String,
  poster: String,
  trailer: String,
  rating: Number,
  summary: String,
});

module.exports = mongoose.model('Movie', movieSchema);
