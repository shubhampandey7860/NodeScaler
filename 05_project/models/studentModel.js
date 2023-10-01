const mongoose = require('mongoose')
const joi = require('joi')  


const StudentSchema = new mongoose.Schema({
    name:{type:String,required :true,minlength:3,maxlength:30,unique :true},
    IsEnrolled:{
        type:Boolean,
        default:false

    },
    Phone:{
        type:String,
        require:true,
        minlength:10,
        maxlength:25
    }



})

const Students = new mongoose.model('student',StudentSchema)

function validateData(student){
    const schema = {
        name : joi.string().min(3).required(),
        phone:joi.string().min(10).max(50).required(),
        IsEnrolled:joi.boolean()

    }
    return joi.validate(student,schema)

}


exports.Students = Students,
exports.validate = validateData;
