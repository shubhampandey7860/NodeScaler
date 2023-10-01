const express = require('express')
const categories = require("./Routes/categories")
const students = require("./Routes/students")
const mongoose = require('mongoose')


const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/Api')
.then(()=> console.log('connection to mongodb successfull'))
.catch(err => console.error('Could not connect to mongodb',err))



app.use(express.json())
app.use('/api/categories',categories)
app.use('/api/students',students)











const port = process.env.Port||3000
app.listen(port, () => {
    console.log(`port is running on  ${port}`)
    
  })