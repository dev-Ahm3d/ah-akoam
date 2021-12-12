const {DataTypes, Sequelize} = require('sequelize') ;
const {db} = require('../server')

const Element = db.define('Elements' , {
    el_id:{
        allowNull : false , 
        type : DataTypes.INTEGER , 
        autoIncrement : true ,
        primaryKey : true ,
        unique : true 
    } , 
    dep_name_arabic : {
        type : DataTypes.STRING , 
        allowNull : false ,
    },
    dep_name_english : {
        type : DataTypes.STRING , 
        allowNull : false ,
    },
    sub_dep_name_arabic : {
        type : DataTypes.STRING , 
        allowNull : false ,
    },
    sub_dep_name_english : {
        type : DataTypes.STRING , 
        allowNull : false ,
    },
    title : {
        type : DataTypes.STRING , 
        allowNull : false 
    } ,
    description : {
        type : DataTypes.STRING , 
        allowNull : false  
    } , 
    image : {
        type : DataTypes.STRING , 
        allowNull : false  
    } ,
    videoLink : {
        type : DataTypes.STRING , 
        allowNull : true
    } , 
    categories : {
        type : DataTypes.STRING,
        allowNull : false
    },
    quality : {
        type : DataTypes.STRING , 
        allowNull : true
    },
    year : {
        type : DataTypes.INTEGER , 
        allowNull : false
    } , 
    date : {
        type : DataTypes.DATE , 
        allowNull : false
    } ,
    rating : {
        type : DataTypes.FLOAT ,
        allowNull : false
    }

}, {
    tableName : 'Elements',
    createdAt : true ,
    updatedAt : true ,
})






exports.getAllElements = async () =>{
    
    try {
        const elements = await Element.findAll() 
        elements.map(el => el.categories = JSON.parse(el.categories))
        return elements
    } catch (error) {
        throw new Error(error)
    }
}


exports.getElementById = async id =>{
    try {
        const element = Element.findOne({
            where : {
                el_id : id
            }
        })
        return element 
    } catch (error) {
        throw new Error(error)
    }
}

exports.getElementsByDep = async data =>{
    try {
        const elements = Element.findAll({
            where : {
                dep_name_english : data.depName
            }
        })
        return elements
    } catch (error) {
        throw new Error(error)
    }
}

exports.getElementsBySub = async data =>{
    try {
        
        const elements = Element.findAll({
            where : {
                sub_dep_name_english : data.subName
            }
        })
        return elements
    } catch (error) {
        throw new Error(error)
    }
}

exports.updateElement = async data =>{
    try {
        let element = await Element.findOne({
            where : {
                el_id : data.id
            }
        })
                
        await element.update({
            title : data.title || element.title ,
            description : data.description || element.description , 
            videoLink : data.videoLink || element.videoLink ,
            year : data.year || element.year ,
            quality : data.quality || element.quality ,
            categories : data.categories ? (JSON.stringify((data.categories) || "")) : (element.categories)
        })
        return {
            updated : true  ,
            data : element ,
            msg : 'تم تعديل العنصر بنجاح'
        }
    } catch (error) {
        throw new Error(error)
    }
}

exports.deleteElement = async id =>{
    try {
        await Element.destroy({
            where:{
                el_id : id
            }
        })
        return {
            deleted:true  ,
            msg : 'تم حذف العنصر بنجاح'
    }
    } catch (error) {
        throw new Error(error)
    }
}


exports.addElement = async data =>{

    try {
        const newElement = await Element.create({
            title : data.title ,
            description : data.description ,
            dep_name_english : data.enDep ,
            dep_name_arabic : data.arDep ,
            sub_dep_name_english : data.en_subdep ,
            sub_dep_name_arabic : data.ar_subdep ,
            image : data.img  , 
            videoLink : data.videoLink ,
            categories : JSON.stringify((data.categories) || "") ,
            quality : data.quality , 
            year : data.year ,
            rating:data.rating,
            date : Date.now() 
        })
        let newEl = newElement
        newEl.categories = data.categories
        
        return {
            created : true , 
            element : newEl ,
            msg : 'تم اضافة العنصر بنجاح'
        }

    } catch (error) {
        throw new Error(error)
    }
    
}

exports.Element = Element
