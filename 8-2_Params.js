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

//! below gives the product with id: 1 

app.get('/api/products/1',(req,res)=>{

    const singleProduct = products.find((product)=>{
        return product.id === 1;
    })

    res.json(singleProduct)

})


//! now for every product we cant HOT CODE every time 1,2,3 etc... so to avoid the above we do the following: 

//TODO go to 8-3_Params_QuerySting.js (next file)



app.all('*',(req,res)=>{
    res.status(404).send(`<h1> Resource Not Found </h1>`)
})

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})