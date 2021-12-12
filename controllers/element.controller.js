const elementModel = require('../models/element.model') 

exports.getAllElements = (req,res) =>{
    elementModel.getAllElements().then(data =>{
        res.json({data})
    }).catch(err =>{
        console.log(err)
    })
}

exports.getElementsByDep = (req,res) =>{
    elementModel.getElementsByDep(req.body.data).then(data =>{
        res.json({data})
    }).catch(err =>{
        console.log(err)
    })
}

exports.getDepsAndSubs = ()=>{
    elementModel.getElementsByDep(req.body.data).then(data =>{
        res.json({data})
    }).catch(err =>{
        console.log(err)
    })
}

exports.getElement = (req,res) =>{
    elementModel.getElementById(req.params.id).then(data =>{
        res.json({data})
    }).catch(err =>{
        console.log(err)
    })
}


exports.getElementsBySub = (req,res) =>{
    elementModel.getElementsBySub(req.body.data).then(data =>{
        res.json({data})
    }).catch(err =>{
        console.log(err)
    })
}

exports.addElement = (req,res) =>{
    //console.log(req.body)
    elementModel.addElement(req.body.data).then(data =>{
        res.json({data})
    }).catch(err =>{
        console.log(err)
    })
}

exports.updateElement = (req,res) =>{
    elementModel.updateElement(req.body).then(resp =>{
        if(resp.updated) res.json({
            updated : true ,
            data : resp.data.dataValues ,
            msg : resp.msg
        })
        else console.log('something wrong !!')
    }).catch(err =>{
        console.log(err)
    })
    
}


exports.deleteElement = (req,res) =>{
    elementModel.deleteElement(req.headers.id).then(resp =>{
        if(resp.deleted) res.json(resp)
        else console.log('something wrong !!')
    }).catch(err =>{
        console.log(err)
    })
    
}