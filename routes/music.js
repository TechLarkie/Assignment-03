//API for music is on this page

let express = require('express'); // require express which is essential for API applications
let router = express.Router(); // will allow for more modularity within the code
let mongoose = require('mongoose');// require mongoose which will be needed as this project uses mongoDB
let Music = require('../models/music'); // access the schema which was created for music

