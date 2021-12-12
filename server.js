require('dotenv').config();
const express = require('express') ; 
const path = require('path') ; 
const cors = require('cors') ; 

const server = express()
server.use(cors())

const app = require('http').createServer(server) ;
const {Sequelize} = require('sequelize')

const db = new Sequelize(
    process.env.DB_DATABASE ,
    process.env.DB_USERNAME ,
    process.env.DB_PASSWORD ,
    {
        port : process.env.DB_PORT ,
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

exports.db = db ;

db.authenticate()
.then(() =>{
    console.log('Connection has been established successfully.')
    db.sync({force:false}).then(()=> console.log('Tables Created')) 
})
.catch( error => console.error('Unable to connect to the database:', error))


const {Element} = require('./models/element.model')

const {User} = require('./models/auth.model')

const mainRouter = require('./routes/main.router')
const elementRouter = require('./routes/element.router')
const authRouter = require('./routes/auth.router')

server.use(express.static(path.join('build')))

server.use('/api' , mainRouter)
server.use('/api/elements' , elementRouter)
server.use('/api/auth' , authRouter)

server.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'))
})

app.listen(process.env.PORT || 3000 ,()=>{
    console.log('server is running ... ')
})