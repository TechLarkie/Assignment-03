//API for music-collection

const express = require("express");
const router = express.Router();
const musiccollection = require("../models/music-collection");


//redirecting /music-collection to the main landing page
router.get("/", (req,res) => {
    res.redirect("/");
});


//using router.get to obtain all music collections in the database
router.get("/", async (req, res) => {
  const MusicCollection = await MusicCollection.find();
  res.render("music-collection/index", { MusicCollection });
});

//using router.get to obtain a specific music collection
router.get("/:id", async(req,res, next) => {
  const collection = await MusicCollection.findById(req.params.id);
  if(!collection){
    return res.status(404).send("Music Collection you requested could not be found :(")
  }
  res.render("viewmusic", {title: collection.title, collection});
});

//this will route to the page which will have the music collection creation tool
router.get("/new", (req, res) => {
  res.render("music-collection/new");
});


//music collection creation 
router.post("/", async (req, res) => {
  await MusicCollection.create({ title: req.body.title, music: [] }); //telling to start with an empty array which will later have music added to it
  res.redirect("/"); //redirect to the landing page
});



//add song to collection
router.post("/:id/music", async (req, res, next) => {
  await MusicCollection.findByIdAndUpdate(req.params.id, {
    $push: {
      songs: {
        name: req.body.name,
        Musician: req.body.Musician,
        Genre: req.body.Genre
      }
    }
  });

  res.redirect(`/music-collection/${req.params.id}`);
});

//delete a music collection
router.post("/:id/delete", async (req, res, next) => {
  try{
    await MusicCollection.findByIdAndDelete(req.params.id);
    res.redirect("/music-collection");
  } catch (err) {
    next(err);
  }
});

module.exports = router;