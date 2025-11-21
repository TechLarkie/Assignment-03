//this file will actually allow users to have their own collections

const mongoose = require("mongoose");
const music = require("./music");

const musicCollection = new mongoose.Schema(
  {
  title: { type: String, required: true }, //creates a title for the collection

  //music is embedded directly into the collection
  music: [{
    name: String,
    Musician: String,
    Genre: String
  }]
  },

  {
    collection: "musicCollection" //name of the collection (re-written to be a string)
  }

);

module.exports = mongoose.model("MusicCollection", musicCollection); //this allows the model to be exported to other files in the project so that the model can be manipulated via CRUD
