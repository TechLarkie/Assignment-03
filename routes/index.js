var express = require('express');
var router = express.Router();
const MusicCollection = require("../models/music-collection"); //import the music collection model which will then query the mongoDB database for its contents

/* GET landing page. */
router.get('/', async function(req, res, next) {
  const collections = await MusicCollection.find(); //fetches all of the current collections from mongoDB
  res.render('index', { title: 'Music Collector !' , createCollection: collections });
});

/* GET Create Collection Page */
router.get('/create-collection', function(req,res,next){
  res.render('create-collection', {title:"Create Music Collection !"});
})



module.exports = router;
