const mongoose = require("mongoose")


exports.connectdatabase = async()=>{
    // connecting to database
    await mongoose.connect("mongodb+srv://hello:hello@cluster0.p1f99f9.mongodb.net/?retryWrites=true&w=majority")
    
        console.log("database connect succesfully")
}