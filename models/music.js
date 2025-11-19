// creating code which will allow the site user to save music



// creating the 'music' model, which serves as a template for what is actually stored when a user types in the songs which they like


const mongoose = reqiure("mongoose");

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

module.exports=mongoose.model("music",musicModel);