const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/testDatabase')
.then(()=> console.log('connection to mongodb successfull'))
.catch(err => console.error('Could not connect to mongodb',err))


// Schema 

const CourseSchema = new mongoose.Schema({
    name:String,
    creater:String,
    publishedDate:{type:Date,default:Date.now},  // {type:String,required:true}
    ispublished : Boolean,


})


const Course = mongoose.model('Course',CourseSchema)

async function CreateCourse(){
    const course = new Course({
        name:'JavaScript',
        creater:'Shubham Pandey',
        ispublished:true
    })
    
    const result = await course.save()
    console.log(result)
    
    
}
//CreateCourse()   


async function getCourses(){
    const courses = await Course.find({'creater':'Shubham Pandey'}).select({name:1,publishedDate:1})
    console.log(courses) 
}
//getCourses()



async function UpdateCourse(id){
    const course = await Course.findById(id)
    
    if (!course) return ;
    

    course.creater = 'Chethan Reddy'
    

    const updatedCourse = await course.save()
    console.log(updatedCourse)


}

//UpdateCourse('651558a2953091d42c91482f')


async function deleteCourse(id){
    const course = await Course.findByIdAndRemove(id)
    console.log('course deleted successfully')




}
//deleteCourse('651558a2953091d42c91482f')