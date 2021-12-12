const {Department} = require('../models/department.model')
const {SubDep} = require('../models/department.model')
const {Element} = require('../models/element.model')

// 1 to many 

Department.hasMany(SubDeb)
SubDeb.belongsTo(Department) 

SubDeb.hasMany(Element)
Element.belongsTo(SubDeb) 
