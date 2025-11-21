//API for music-collection

const express = require("express");
const router = express.Router();
const MusicCollection = require("../models/music-collection"); //this importsthe MusicCollection model from the models file "music-collection"




//using router.get to obtain a specific music collection with the use of its mongoDB id
router.get("/:id", async(req,res, next) => {
  const collection = await MusicCollection.findById(req.params.id);
  if(!collection){
    return res.status(404).send("Music Collection you requested could not be found :(")
  }
  res.render("viewmusic", {title: collection.title, collection});
});



//music collection creation
router.post("/", async (req, res) => {
  await MusicCollection.create({ title: req.body.title, music: [] }); //telling to start with an empty array which will later have music added to it
  res.redirect("/"); //redirect to the landing page
});



//add song to an existing collection
router.post("/:id/music", async (req, res, next) => {
  await MusicCollection.findByIdAndUpdate(req.params.id, {
    $push: {
      music: {
        name: req.body.name,
        Musician: req.body.Musician,
        Genre: req.body.Genre
      } //allows me to add the above information (which is the same information which is inputted when first adding a song)
    }
  });

  res.redirect(`/music-collection/${req.params.id}`); //redirects to the music collection page on the webiste
});

//delete a music collection in its entirety
router.post("/:id/delete", async (req, res, next) => {
  try{
    await MusicCollection.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});


//delete a specifc song from a music collection
router.post("/:id/music/:songId/delete", async (req,res,next) =>{
  try{
    await MusicCollection.findByIdAndUpdate(req.params.id,{
      $pull:{
        music: {_id: req.params.songId}
      } //notice the difference from deleting and adding a new song, using $push to add a new song and $pull to remove a song which I no longer want in the collection
    }
  );

  res.redirect(`/music-collection/${req.params.id}`); //redirect back to the music collection page 

  } catch(err){
    next(err);
  }
});

module.exports = router; //exports the router so that it can be mounted