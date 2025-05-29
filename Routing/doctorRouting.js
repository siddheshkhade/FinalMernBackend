let express = require('express')
let doctorRouting = express.Router()
let doctorModel = require('../model/doctorModel')

doctorRouting.post("/doctor", async(req, res) => {
    try {
        let doctor = new doctorModel(req.body)
        let result = await doctor.save()
        res.send(result)
    } catch (error) {
        console.log(error);
    }
})

doctorRouting.get("/doctor/:tname", async(req,res) => {
try {
    let doctor = await doctorModel.find({tname:req.params.tname})
    res.send(doctor)
} catch (error) {
    console.log(error);
    
}
})

module.exports = doctorRouting