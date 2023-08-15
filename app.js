const express = require('express')
const app = express()

const people = require("./routes/people.js") 
const auth = require("./routes/auth.js")


app.use(express.static('./methods-public'))

//* To parse form data : 

app.use(express.urlencoded( { extended:false } ) )

//* Parse Json Data (javascript)

app.use(express.json())

//!  ROUTING : below apply to only those who start with api/people , which is just a forward slash in "people.js" file

//!  "/" (in people.js) = "/api/people" (here/app.js)

app.use("/login", auth)
app.use("/api/people", people)



app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
}) 