let mongoose = require('mongoose')
let bookappointmentSchema = new mongoose.Schema({
    tname: {
        type: String,
        required: true
    },
    dname: {
        type: String,
        required: true
    },
    pname: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('bookappointments', bookappointmentSchema)