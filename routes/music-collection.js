//API for music-collection

const express = require("express");
const router = express.Router();
const musiccollection = require("../models/music-collection");
const music = require("../models/music");


//using router.get to obtain all music collections in the database

router.get("/", async (req, res) => {
  const musiccollection = await musiccollection.find();
  res.render("music-collection/index", { musiccollection });
});

//using router.get to obtain a specific music collection

router.get("/:id", async(req,res) => {
  const musiccollection = await musiccollection.findById(req.params.id);
  res.render("music-collection/view", { musiccollection });
});

//this will route to the page which will have the music collection creation tool
router.get("/new", (req, res) => {
  res.render("music-collection/new");
});


//music collection creation 
router.post("/", async (req, res) => {
  await musiccollection.create({ title: req.body.title });
  res.redirect("/music-collection");
});



//add song to collection
router.post("/:id/music", async (req, res) => {
  await musiccollection.findByIdAndUpdate(req.params.id, {
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
router.post("/:id/delete", async (req, res) => {
  await musiccollection.findByIdAndDelete(req.params.id);
  res.redirect("/music-collection");
});

module.exports = router;