const express = require('express')
const app = express()
const { people } = require('./data.js') 

app.use(express.static('./methods-public'))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

//* To parse form data : 

app.use(express.urlencoded( { extended:false } ) )

//* Parse Json Data (javascript form)

app.use(express.json())


//* Below post request gives data to the frontend so it can display the name in the javascript.html 

app.post('/api/people',(req,res)=>{
    const { name } = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:`Please Provide name Value`})
    }
    else{
        return res.status(201).json({success:true,person:name})
    }
    // res.status(201).send(`Successful`)
})

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})

