// connecting to the mongoDB database directly thru the connection string
const  mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Error Connecting with MongoDB",err));

