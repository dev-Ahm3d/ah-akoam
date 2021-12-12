const jwt = require('jsonwebtoken') ; 

exports.notAuth = (req,res,next) =>{
    try {
        let token = jwt.verify(req.header('token'),process.env.SECRET) ; 
        res.json({
            isAuthorized : false 
        })
    } catch (error) {
        next();
    }
}