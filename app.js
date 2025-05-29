let express = require('express')
let app = express()
let cors = require('cors')
require('./dbconfig/dbConfig')
let signupRouting = require("./Routing/signupRouting")
// let {signupRouting, signinRouting} = require("./Routing/signupRouting")
const treatementRouting = require('./Routing/treatementRouting')
const offerRouting = require('./Routing/offerRouting')
const bookAppointmentRouting = require('./Routing/bookAppointmentRouting')
const doctorRouting = require('./Routing/doctorRouting')
const contactusRouting = require('./Routing/contactusRouting')



app.use(express.json())
app.use(cors()) 
app.use("/", signupRouting)
// app.use("/", signinRouting)
app.use("/", treatementRouting)
app.use("/" , offerRouting)
app.use("/",bookAppointmentRouting)
app.use("/", contactusRouting)
app.use("/", doctorRouting)
// for our express application to serve static files such as images, files we are using express.static and providing path as public 
app.use(express.static("public"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is started on ${PORT} port`));

// Demo code 
// app.get("/" , (req, res) => {
//     res.send(`<h1>Backend server running</h1>`)
// })