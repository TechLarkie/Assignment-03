var express = require('express');
var router = express.Router();

/* GET landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Music Collector !' });
});

/* GET Create Collection Page */
router.get('/create-collection', function(req,res,next){
  res.render('create-collection', {title:"Create Music Collection !"});
})



module.exports = router;
