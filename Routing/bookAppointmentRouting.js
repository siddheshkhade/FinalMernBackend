let express = require('express')
let Appoitment = require('../model/bookAppointmentModel')
let bookAppointmentRouting = express.Router()



bookAppointmentRouting.post('/bookAppoitments' , async(req, res) => {
    try{
        let appointment = new Appoitment(req.body)
        let result = await appointment.save()
        res.send(result)
    }
    catch(error) {
        console.log(error);
    }
})

bookAppointmentRouting.get("/bookAppoitments", async(req, res) => {
try {
    let appointment = await Appoitment.find()
    res.send(appointment)
} catch (error) {
    console.log(error);
    
}
})

module.exports = bookAppointmentRouting;