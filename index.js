const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("CONNCTED");
  })
  .catch(() => {
    console.log("ERROR");
  });

mongoose.set("strictQuery", true);

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  Rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

const amadeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 9.2,
  Rating: "R",
});
