const mongoose = require("mongoose")
const schema = mongoose.schema

const blogschema = new schema({
    title :{
      type : String,   
},
subtitle : {
    type : String
},
description : {
    type : string

},


},{
    timestamp : true
})

const blog = mongoose.model("blog",blogschema)
// alternative
// module.export = mongoose.model("blog",blogschema)
module.export = blog