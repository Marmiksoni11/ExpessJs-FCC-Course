const express = require('express')
const app = express()
const { people } = require('./data.js') 

app.use(express.static('./methods-public'))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

//* To parse form data : 

app.use(express.urlencoded( { extended:false } ) )

//* Parse Json Data (javascript)

app.use(express.json())




//* Below API is for postman testing  PUT req :

app.put('/api/people/:id',(req,res)=>{
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

app.delete('/api/people/:id',(req,res)=>{
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

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})