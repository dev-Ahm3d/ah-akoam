const router = require('express').Router() 
const expressParser = require('express').json()
const authController = require('../controllers/auth.controller')
const authGuard = require('../guards/auth.guard')

router.post('/login'  , expressParser ,authController.login)

router.patch('/resetPass'  , expressParser ,authController.changePass)


module.exports = router 