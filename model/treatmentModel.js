let mongoose = require('mongoose')
let tratementschema = new mongoose.Schema({
    tname: {
        type: String,
        required: true
    },
    tdesc: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    }
})
module.exports= mongoose.model("treatements", tratementschema) // collection name is treatments and schema is tratementschema