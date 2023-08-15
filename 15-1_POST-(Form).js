const express = require('express')
const app = express()
const { people } = require('./data.js') 

app.use(express.static('./methods-public'))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

//* To parse form data : 

app.use(express.urlencoded( { extended:false } ) )


app.post('/login',(req,res)=>{ 

    //* console.log(req.body) // returns : [Object: null prototype] { name: 'marmik' }
    // res.send(`POST`)

    const { name } = req.body;
    if(name){
        return res.status(200).send(`<h1>Welcome ${name}</h1>`)
    }
    else{
        return res.status(401).send(`<h1>Please Provide Credentials</h1>`)
    }
    
})

// app.all('*',(req,res)=>{
//     res.status(404).send(`<h1> Resource Not Found </h1>`)
// })

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})