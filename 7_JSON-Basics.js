const express = require('express')
const app = express();

//? getting json data form data.js module file. 
const { products,people } = require('./data.js')


app.get('/',(req,res)=>{

    //? Basic Json Array of Objects : 
    //* res.json([{name : "Marmik"},{name : "Krish"}])

    res.json(products)
    //* res.json(people)
})


app.all('*',(req,res)=>{
    res.status(404).send(`<h1> Resource Not Found </h1>`)
})

app.listen(5000,()=>{
    console.log(`Server listening on Port 5000...`);
})