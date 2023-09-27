const express = require('express')
//const bodyParser = require('body-parser');
const myfunc = require('../middelware/middel')

const morgan = require('morgan')  // custom middelware

const app = express() 


app.use(express.json())

/* 
// Parse JSON request bodies   : 
app.use(bodyParser.json());

*/
app.use(myfunc)
app.use(morgan('tiny'))

const port = 3000
const courses = [{
    id:1,
    name:"Python"
},
{
    id:2,
    name:"JavaScript"
},
{
    id:3,
    name:"Java"
},

]

app.get('/', (req, res) => {
  res.send('Jay Shri Ram')
})

app.get('/courses', (req, res) => {
    res.send(courses)
  })


// route parameter
app.get("/courses/:coursename",(req,res)=>{
    let course = courses.find(course => course.name === req.params.coursename)
    

    if (!course){
        res.status(404).send("Course is not available")
    }
    res.send(course)
    
}) 

// post

app.post('/courses',(req,res)=>{
    const course = {
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course)
    res.send(course)

})


// put

app.put("/courses/:coursename",(req,res)=>{
    let course = courses.find(course => course.name === req.params.coursename)
    

    if (!course){
        res.status(404).send("Course is not available")
    }
    course.name = req.body.name
    res.send(course)
    

})




app.delete("/course/:id",(req,res)=>{
    let course = courses.find(course=> course.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send("The course you are looking for does not exists")
    }
    const index = courses.indexOf(course)
    courses.splice(index,1)
    res.send(course)
})






app.listen(port, () => {
  console.log(`port is running on  ${port}`)
  
})