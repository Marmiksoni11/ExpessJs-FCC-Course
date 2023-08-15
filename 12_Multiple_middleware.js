const express = require('express')
const app = express();
const logger = require('./11_logger.js')
const authorize = require("./12_authorize.js")


//* Below is how we can add multiple middleware functions
//* Below order matters if we keep authorize first it will execute before logger 

app.use([logger,authorize])

//! We can also use url path here as well
//! app.use("/api",[logger,authorize])



app.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})

app.get('/api/products',(req,res)=>{
    console.log(req.query);
    res.send('<h1>Products</h1>')
})

//! now what if i want the app.use for only one route ? : 
//todo         THIS IS WHAT YOU DO :  

app.get('/api/item',[logger,authorize],(req,res)=>{
    res.send('<h1>Item</h1>')
})

app.all('*',(req,res)=>{
    res.status(404).send(`<h1> Resource Not Found </h1>`)
})

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})