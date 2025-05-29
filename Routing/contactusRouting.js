let express = require('express')
let contactusRouting = express.Router()
let nodemailer = require('nodemailer')

contactusRouting.post('/contactus', async (req, res) => {
    try {
        const { name, email, phone, message, subject } = req.body

        let transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "siddhesh.khade60@gmail.com",
                pass: "sxrs yuqu bzov weor",
            }
        })

        let mailOptions = {
            from: "siddhesh.khade60@gmail.com",
            to: "siddheshkhade646@gmail.com",
            subject: "Contact Us form HealthPlus",
            html: `
                <h1>Contact Us Form</h1>
                <h2>Name : ${name}</h2>
                <h2>Email : ${email}</h2>
                <h2>Phone : ${phone}</h2>
                <h2>Subject : ${subject}</h2>
                <h2>Message : ${message}</h2>
            `
        }
       await transport.sendMail(mailOptions, (err, info)=>{
            if (err) throw err
            res.send("Mail sent");
        });
    } catch (err) {
        console.log(err);
    }
})

module.exports = contactusRouting
