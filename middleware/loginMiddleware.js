let jwt = require('jsonwebtoken')

let loginMiddleware = (req, res, next) => {

    let token = req.header("x-token") //reference for token
    
    if(!token){
        res.send("No Token")
    }
    // decrypting the genrated token
    let decode =  jwt.verify(token, "Json123String")
    req.user = decode.user
    next()
}
module.exports = loginMiddleware;