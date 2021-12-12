const authModel = require('../models/auth.model')

exports.login = (req,res)=>{
    authModel.login(req.body).then(resp => {
        res.json(resp)
    })
    .catch(err => console.log(err))
    
}

exports.changePass = (req,res)=>{
    authModel.changePass(req.body).then(resp => res.json(resp))
    .catch(err => console.log(err))
    
}