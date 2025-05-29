let mongoose = require('mongoose')
let offerSchema = new mongoose.Schema({
    oname: {
        type: String,
        required: true
    },
    odesc: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('offers', offerSchema)