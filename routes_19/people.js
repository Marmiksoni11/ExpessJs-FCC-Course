const express = require('express')
const router = express.Router()
const { people } = require('../data.js') 


//! "/" = "/api/people"  

//* get /api/people
router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})


//* Below post request gives data to the frontend so it can display the name in the javascript.html 

router.post('/',(req,res)=>{
    const { name } = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:`Please Provide name Value`})
    }
    else{
        return res.status(201).json({success:true,person:name})
    }
    // res.status(201).send(`Successful`)
})




//* Below API is for postman testing :

router.post('/postman',(req,res)=>{
    console.log(req.body)
    const { id, name } = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:`Please Provide name Value`})
    }
    else{
        return res.status(201).send({success:true,data: [...people,{id,name}]})
    }
})


//* Below API is for postman testing  PUT req :

router.put('/:id',(req,res)=>{
    const { id }= req.params
    const {name} = req.body
    
    // console.log(id,name)
    // res.send(`hello World`)

    const person = people.find((person)=>{
        return person.id === Number(id)
    })

    if(!person){
        return res.status(404).json({success:false,msg:`No person with id ${id}`})
    }
        
    const newPeople = people.map((person)=>{
        if(person.id  === Number(id)){
            person.name = name
        }
        return person  
    })
    res.status(200).json({success:true,data: newPeople})
})


//* Below API is for postman testing  DELETE req :

router.delete('/:id',(req,res)=>{
    const person = people.find((person) => person.id === Number(req.params.id))

    if(!person){
        return res.status(404).json({success:false,msg:`No person with id ${req.params.id}`})
    }

    //*only show those who dont match the params id  
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
        )

    return res.status(200).json({success:true,data:newPeople})
})

module.exports = router
