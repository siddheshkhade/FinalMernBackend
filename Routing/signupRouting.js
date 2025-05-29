let express = require('express')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
let signupRouting = express.Router()
// let signinRouting = express.Router()
let signupModel = require("../model/signupModel")
const loginMiddleware = require('../middleware/loginMiddleware')

signupRouting.post("/signup", async(req, res) => {
    try {
        let signup = new signupModel(
            {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: bcrypt.hashSync(req.body.password, 10),
                address: req.body.address
            }
        )
        let result = await signup.save()
        res.send(result)

    } catch (error) {
        console.log(error);
        
    }
})

signupRouting.post("/login",async(req, res) => {
    try {
        const { email, password } = req.body 
        // let existss = signupModel.findOne({ email: email, password: password})
        // let existss = signupModel.findOne({ email: email, password: password})
        // if (existss) {
        //     res.send({ message: "Login Successfull" })
        // } else {
        //     res.send({ message: "Login Failed" })
        // }
        let exists = await signupModel.findOne({email: email})
     
        if(! exists){
            res.send(`User not found`) //if user data (email,password) does not match
        } 
        // else if(exists.password !== password ) {
        //     res.send(`Invalid password`) // if password does not match
        // } 
        // decrypting pssword
        else if(!bcrypt.compareSync(password, exists.password))
        {
            res.send(`Invalid password`)
        }
        else {
            //  res.send('valid') if both email and password match
            // jwt starts
            // based on payload wr are gonna genrating the token using _id
            let payload = {
                // user is object
                user:{
                    id: exists._id
                }
            }
            jwt.sign(payload, "Json123String", {expiresIn: 36000}, (err, token) => {
                if (err) throw err
                res.send({token})

            } )
        }

    } catch (error) {
        console.log(error);
        
    }
})

signupRouting.get("/admindashboard", loginMiddleware ,async(req, res)=>{
// if the token is available then send 
res.send("Admin")
})

// module.exports = {signupRouting, signinRouting}
module.exports = signupRouting