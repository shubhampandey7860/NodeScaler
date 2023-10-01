const express = require('express')
const app = express()
app.use(express.json())
const joi = require('joi')



const categories = [
    {
    id:1,
    name:"web development"
    },
    {
        id:2,
        name:"DataScience"
    },
    {
        id:3,
        name:'Block Chain'
    }

]


app.get('/api/categories',(req,res)=>{
    
    res.send(categories);

})  // get all categories

app.get('/api/categories/:id',(req,res)=>{
    const category = categories.find(c =>c.id === parseInt(req.params.id));

    if (!category) return res.status(404).send('The genre with given id is not found')

    res.send(category);

})   // get specific category

app.post('/api/categories',(req,res)=>{
    const {error} = validateData(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const category = {
        id:categories.length+1,
        name:req.body.name
    }
    categories.push(category)
    res.send(category)
})  // create category


app.put('/api/categories/:id',(req,res)=>{

    const category = categories.find(c =>c.id === parseInt(req.params.id));

    if (!category) return res.status(404).send('The genre with given id is not found')

    category.name = req.body.name
    res.send(category)

})  // updating category name


app.delete("/api/categories/:id",(req,res)=>{
    let category = categories.find(c=> c.id === parseInt(req.params.id))
    if(!category){
        res.status(404).send("The course you are looking for does not exists")
    }
    const index = categories.indexOf(category)
    categories.splice(index,1)
    res.send(category)
})


const port = process.env.Port||3000
app.listen(port, () => {
    console.log(`port is running on  ${port}`)
    
  })

function validateData(category){
    const schema = {
        name : joi.string().min(3).required()
    }
    return joi.validate(category,schema)

}  