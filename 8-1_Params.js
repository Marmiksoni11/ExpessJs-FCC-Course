const express = require('express')
const app = express();
const { products , people } = require('./data.js')

//TODO creates a href which gets you to : /api/products/ 
app.get('/',(req,res)=>{
    res.send(`<h1>Marmik soni</h1> <br> <a href="/api/products"> Products </a>`)
})


app.get('/api/products',(req,res)=>{
    
    // res.json(products)

    //* TO filter out data, we only show name,id,and img and not everything ( price, desc, etc... ) 
    const newProduct = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image};
    });

    res.json(newProduct)

})

app.all('*',(req,res)=>{
    res.status(404).send(`<h1> Resource Not Found </h1>`)
})

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})