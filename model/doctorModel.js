let mongoose = require('mongoose')
let doctorSchema = new mongoose.Schema({
    tname: {
        type: String,
        required: true
    },
    dname: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    exp: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('doctors', doctorSchema)