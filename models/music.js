// creating code which will allow the site user to save music

// creating the 'music' model, which serves as a template for what is actually stored when a user types in the songs which they like


const mongoose = require("mongoose");

let musicModel = mongoose.Schema( 
    {
        name: String,
        Musician: String,
        Genre: String,
        //saving basic information about the song such as the name, the musician who wrote the song and which genre it belongs to

    },

    {
        collection:"music" 
    }

);

module.exports=mongoose.model("music",musicModel); //this export actually allowes the model which is created in this file to be CRUD'd in other files in which it is referenced as an export