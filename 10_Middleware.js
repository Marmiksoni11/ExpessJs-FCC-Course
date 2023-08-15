const express = require('express')
const app = express();

//* req => middleware => res 

//* Middlewares can be self-generated  and third-party , for third party we use " npm i " to install.


//* the logger funciton returns method,url,time everytime the user refreshes

const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear()
    console.log(method,url,time);
    next()
}


//* the logger function is the middleware passed below

app.get('/',logger,(req,res)=>{
    res.send('Home')
})

app.get('/about',logger,(req,res)=>{
    res.send('About')
})

app.all('*',logger,(req,res)=>{
    res.status(404).send(`<h1> Resource Not Found </h1>`)
})

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})