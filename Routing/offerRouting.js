let express = require('express')
let offerRouting = express.Router()
let offerModel = require('../model/offerModel')

offerRouting.post('/offers', async(req, res) => {
    try {
        let offer = new offerModel(req.body)
        let result = await offer.save()
        res.send(result)
    } catch (error) {
        
    }
})

offerRouting.get('/offers', async(req, res) =>{
    try {
        let offer = await offerModel.find()
        res.send(offer)
    } catch (error) {
        console.log(error); 
    }
})

module.exports = offerRouting