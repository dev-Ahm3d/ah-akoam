const {DataTypes} = require('sequelize') ;
const {db} = require('../server')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = db.define('Users' , {
    user_id:{
        allowNull : false , 
        type : DataTypes.INTEGER , 
        autoIncrement : true ,
        primaryKey : true ,
        unique : true 
    } , 
    is_admin : {
        type : DataTypes.BOOLEAN , 
        allowNull : false , 
    } ,
    name : {
        type : DataTypes.STRING , 
        allowNull : false ,
    } ,
    email : {
        type : DataTypes.STRING , 
        allowNull : false ,
    }, 
    password : {
        type : DataTypes.STRING , 
        allowNull : false
    } ,
}, {
    tableName : 'Users',
    createdAt : true ,
    updatedAt : true
})



exports.changePass = async data =>{
    try {
        const user = await User.findOne() 
        let theSamePass
        await bcrypt.compare(data.oldPass , user.dataValues.password)
        .then(same => theSamePass = same)
        .catch(err => console.log(err))

        //console.log(theSamePass)
        if(theSamePass){
            const newHashedPass = await bcrypt.hash(data.newPass , 10) 
            user.password = newHashedPass 
            await user.save()
            return {
                changed : true ,
                msg : 'تم تغيير كلمة المرور بنجاح .. سيتم تحويلك الى صفحة تسجيل الدخول'
            }
        }
        return {
            changed : false , 
            msg : 'كلمة المرور غير صحيحة'
        }
    } catch (error) {
        throw new Error(error)
    }
}


exports.login = async data =>{
    //console.log(data)
    try {
        const user = await User.findOne({
            where : {
                email : data.email
            }
        })
        if (user) {
            let same = await bcrypt.compare(data.password , user.dataValues.password)
            if(same){
                let token = jwt.sign({
                    id : user.user_id , 
                    name : user.name , 
                    email : user.email , 
                    is_admin : user.is_admin
                },process.env.SECRET) ;
                return {
                    success : true , 
                    token ,
                    msg : 'تم تسجيل الدخول بنجاح'
                }
            }
            return {
                success : false ,
                msg : 'كلمة المرور غير صحيحة'
            }
        }
        return {
            success : false , 
            msg : 'البريد الالكترونى غير موجود'
        }
        
    } catch (error) {
        throw new Error(error)
    }
}

exports.User = User 