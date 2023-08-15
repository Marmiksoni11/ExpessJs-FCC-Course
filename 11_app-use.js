const express = require('express')
const app = express();
const logger = require('./11_logger.js')


//* req => middleware => res 



//* Now as we can see below when we have multiple routes, say 50, its tough to add the logger manually in every app.get 

//* To tackle this issue we have : 
//TODO "app.use()" where we pass in the middleware.

//! Also make sure to keep the app.use() on the top of the file as in JS order matters. 

// app.get('/',logger,(req,res)=>{
//     res.send('<h1>Home</h1>')
// })

// app.get('/about',logger,(req,res)=>{
//     res.send('<h1>About</h1>')
// })

// app.get('/api/products',logger,(req,res)=>{
//     res.send('<h1>Products</h1>')
// })

// app.get('/api/item',logger,(req,res)=>{
//     res.send('<h1>Item</h1>')
// })

//* app.use : this will add the logger function(middleware) in every/All lines automatically
//? app.use(logger)

//* we can also specify a path to filter out stuff : 

//* now below will only give the logger to alll those whose path starts with api 
app.use('/api',logger)

app.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})

app.get('/api/products',(req,res)=>{
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