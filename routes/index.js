var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Create Collection Page */
router.get('/create-collection', function(req,res,next){
  res.render('create-collection', {title:"create-collection"});
})



module.exports = router;
