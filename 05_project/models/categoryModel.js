const mongoose = require('mongoose')
const joi = require('joi')   

const CategorySchema = new mongoose.Schema({
    name:{type:String,required :true,minlength:3,maxlength:30,unique :true},



})

const Category = new mongoose.model('category',CategorySchema)


function validateData(category){
    const schema = {
        name : joi.string().min(3).required(),
        
    }
    return joi.validate(category,schema)

}

exports.validate = validateData;
exports.Category = Category;
