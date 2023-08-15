
const express = require('express')

const app = express();
 
const path = require('path')

// ! Setup Static and Middleware

//*  The "public" folder is same as "static" folder where we Dump all our Static Files : 

//*  CSS,JS, and Images etc

//* HTML files are static as well we can add our file inside public folder and it will work.

app.use(express.static('./public'))

//TODO  So the first there are three ways to serve html files : 1. Inside public folder, and 2. like below :
//TODO 3. SSR - server side rendering we use template engine for that ex. PUG. 
// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//     // res.status(200).send(`Home Page`)
// })

app.get('/about',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,('./about.html')))
})


//* The Else Block for handling Errors in nodejs is like the below in Express : 
app.all('*',(req,res)=>{
    res.status(404).send(`
    <h1> Error 404 ! </h1>
    <h2>Resource Not Found</h2>
    `)
})

app.listen(5000,()=>{
    console.log('Server Started on Port 5000....');
})