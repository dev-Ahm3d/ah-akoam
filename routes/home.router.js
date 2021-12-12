const router = require('express').Router() ; 
const expressParser = require('express').json()
const elementConreoller = require('../controllers/element.controller')

router.get('/' , elementConreoller.getAllElements)

module.router = router 