let express = require('express')
let multer = require('multer')
const treatmentModel = require('../model/treatmentModel')
let treatementRouting = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads') // path where we want to store the 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname) // for filename abc.jpeg it's going to add we are present date and timestamp format 
  } 
})
const upload = multer({ storage: storage })

// adding image to treatment
treatementRouting.post("/treatment", upload.single('image'), async(req, res) => {
    // console.log(req.file, req.body)
    const { path, filename } = req.file;
    const { tname, tdesc } = req.body;
    // now we are saving the data to the database
    let treatment = new treatmentModel({
        tname,
        tdesc,
        path,
        filename
    });
    let result = await treatment.save();
    res.send(result);
} )


treatementRouting.post("/treatment",async(req, res) => {
    try {
        let treatment = new treatmentModel(req.body)
        let result = await treatment.save()
        res.send(result)
    }
    catch(error) {
        console.log(error);
    }
} )

treatementRouting.get("/treatment", async(req, res) => {
    try {
        let treatment = await treatmentModel.find()
        res.send(treatment)
    } catch (error) {
        console.log(error);
        
    }
})

// dynamic routng for treatmentdetails page
treatementRouting.get("/treatment/:tid", async(req, res) => {
    try {
        let treatment = await treatmentModel.findOne({_id: req.params.tid})
        res.send(treatment)
    } catch (error) {
        console.log(error);
        
    }
})
// delete treatment based on tid
treatementRouting.delete("/treatment/:tid", async(req, res) => {
    try {
        let treatment = await treatmentModel.deleteOne({_id: req.params.tid})
        res.send(treatment)
    } catch (error) {
        console.log(error);
        
    }
})

treatementRouting.put("/treatment/:tid", async(req, res) => {
    try {
        let treatment =  await treatmentModel.updateOne({_id:req.params.tid}, {$set: req.body})
        res.send(treatment)
    } catch (error) {
        console.log(error);
    }
})


module.exports = treatementRouting