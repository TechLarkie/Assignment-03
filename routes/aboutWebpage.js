//code which serves the "About" section on the site
var express = require('express');
var router = express.Router();

/* GET about page*/
router.get('/', function(req, res, next) {
  res.render('about', {title: "About This Website"}); 
});

module.exports = router;
