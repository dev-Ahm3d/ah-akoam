const router = require('express').Router() ; 
const expressParser = require('express').json()
const elementController = require('../controllers/element.controller')

router.get('/' , elementController.getAllElements)

module.exports = router 