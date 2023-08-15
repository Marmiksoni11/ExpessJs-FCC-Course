const express = require('express')
const app = express()
const { people } = require('./data.js') 


app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.all('*',(req,res)=>{
    res.status(404).send(`<h1> Resource Not Found </h1>`)
})

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})