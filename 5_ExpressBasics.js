//* const express = require('express');
//* const app = express()

//!            OR

//* const app = require('express');


//* app.get : Read Data
//* app.post : insert Data
//* app.put : update Data
//* app.delete : delete Data


//* app.all : all of the above


//* app.use 
//* app.listen 




const express = require('express');
const app = express()

app.get('/', (req,res)=>{
   res.status(200).send(`<h1> Hello Express </h1>`)
})

app.get('/about', (req,res)=>{
   res.status(200).send(`<h1> About Page </h1>`)
})

app.get('/contact', (req,res)=>{
   res.status(200).send(`<h1> Contact Page </h1>`)
})

// the else error handling block
app.all('*',(req,res)=>{
   res.status(404).send(`<h1>Resource not found</h1>`)
})


app.listen(5000,()=>{
   console.log("Server Listening on port 5000...");
})


