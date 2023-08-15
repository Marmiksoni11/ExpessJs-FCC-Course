const express = require('express')
const app = express()
const logger = require('./11_logger.js')
const authorize = require("./12_authorize.js")


//* Installed morgan using npm it is a third party middleware  
const morgan = require('morgan')

app.use(morgan('tiny'))
 
//*  Morgan Shows the following Info : 
//*  GET / 304 - - 4.890 ms
//*  GET /api/item 304 - - 5.940 ms



app.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})

app.get('/api/products',(req,res)=>{
    // console.log(req.query);
    res.send('<h1>Products</h1>')
})

app.get('/api/item',(req,res)=>{
    res.send('<h1>Item</h1>')
})

app.all('*',(req,res)=>{
    res.status(404).send(`<h1> Resource Not Found </h1>`)
})

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})