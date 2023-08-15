const express = require('express')
const app = express();
const { products , people } = require('./data.js')


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





app.get('/api/products/:productID',(req,res)=>{

    // console.log(req);

    //*  returns product Id , like this { productID: '4' }
    //  console.log(req.params);
    
    const {productID} = req.params;

    //* To show one single product 

    const singleProduct = products.find((product)=>{
         return product.id === Number(productID)
    });
    
    if(!singleProduct){
        return res.status(404).send(`<h1> Product does not exist. </h1>`)
    }
    else{
        return res.json(singleProduct)
    }

})

 
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    // console.log(req.params); //* returns : { productID: '1', reviewID: 'asd' }
    res.send(`<h1>HELLO WORLD</h1>`)
})



app.get('/api/v1/query',(req,res)=>{

    //TODO when you/user enter a query in the url inside the browser like this:
    
    //TODO /api/v1/query/?search=aaa&limit=1 here the "/?search=aaa&limit=1",where everything after "?" is query.

    //TODO Now when we enter the query itc ould be anything however the api website or developers can giev you queriesto run 

    //TODO This is also a query : /?name=MarmikSoni&id=1
    
    //* Now the below "req.query" returns the query (in console) in this format:
    //*  { search: 'a', limit: '1' }
    //*  { name: 'MarmikSoni', id: '1' } 


    console.log(req.query);
    
    
    res.send(`<h1>HELLO WORLD</h1>`)

})


//! Now to implement this serach and limit operations using queries we need to write the code like following :
//TODO CHECK THE NEXT FILE : 9-2_QueryString.js   


app.all('*',(req,res)=>{
    res.status(404).send(`<h1> Resource Not Found </h1>`)
})

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})