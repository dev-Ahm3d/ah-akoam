const router = require('express').Router() 
const expressParser = require('express').json()
const elementController = require('../controllers/element.controller')
const multer = require('multer')

router.get('/all' , elementController.getAllElements)
router.get('/department/:name', elementController.getElementsBySub)
router.get('/:id' , elementController.getElement)
//router.post('/add' , expressParser , elementController.addElement)
router.patch('/update' , expressParser, elementController.updateElement)
router.delete('/delete' , elementController.deleteElement)


const multerUploader = multer({
    storage : multer.diskStorage({
        destination : (req,file , cb) =>{
            cb(null,'public/assets/images/')
        } ,
        filename : (req,file , cb)=>{
            cb(null ,Date.now()+'-'+file.originalname)
        } , 
    }) , 
    fileFilter : (req,file,cb)=>{
        if(file.mimetype.startsWith('image/')) cb(null , true) ;
        else {
            cb(null , false) ; 
            cb(new Error('These Types Of Files Are Not Supported')) ; 
        }
    }
})

const cloudinary = require('cloudinary').v2 ;
cloudinary.config({
    cloud_name : 'x4md98' , 
    api_key : '467169452594452' , 
    api_secret : 'VM0aHzv7RNz7eGysTu6ow6UmKMY'
})

//router.post('/login' ,  authGuard.notAuth ,expressParser , authController.login)


router.post('/add' , multerUploader.single('img') , expressParser , async(req,res,next)=>{
    let jsonData = JSON.parse(req.body.data)
    if(req.file.path){
        const result = await cloudinary.uploader.upload(req.file.path) ;
        jsonData.img = result.url ;
        req.body.data = jsonData
    }
    next()
},elementController.addElement)

module.exports = router 
