const express = require('express')
const router = express.Router()
const {Students,validate} = require('../models/studentModel')



/* By using Database */


router.get('/',async(req,res)=>{
    let students = await Students.find()
    res.send(students)

})
router.get('/:id',async(req,res)=>{
    const student = await Students.findById(req.params.id)
    if (!student) return res.status(404).send('The category with given id is not found')
    res.send(student)
})


router.post('/',async(req,res)=>{
    const {error} = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const student = new Students({
        name:req.body.name,
        IsEnrolled:req.body.IsEnrolled,
        Phone:req.body.Phone

    })
    await student.save()
    res.send(student)
})

router.put("/:id",async(req,res)=>{
    
    const {error} = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const student = await Students.findByIdAndUpdate(req.params.id,{name:req.body.name,phone:req.body.phone},{new:true})
    if (!student) return res.status(404).send('The category with given id is not found')
    res.send(student)
})


router.delete("/:id",async(req,res)=>{
    const student = await Students.findByIdAndRemove(req.params.id)
    if (!student) return res.status(404).send(`The category with given ${req.params.id} is not found`)
    res.send('deleted successfully')
})
module.exports = router;