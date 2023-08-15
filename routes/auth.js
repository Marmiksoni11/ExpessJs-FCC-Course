const express = require('express')
const router = express.Router()

//! here "/" means "/login" 

//* Below post request is to check the tradtional form in Index.html

router.post('/',(req,res)=>{

    //* console.log(req.body) // returns : [Object: null prototype] { name: 'marmik' }
    // res.send(`POST`)

    const { name } = req.body;
    if(name){
        return res.status(200).send(`<h1>Welcome ${name} </h1>`)
    }
    else{
        return res.status(401).send(`<h1>Please Provide Credentials</h1>`)
    }

})

module.exports =  router