const express = require('express')
const app = express();
const { products , people } = require('./data.js')


app.get('/',(req,res)=>{
    res.send(`<h1>Marmik soni</h1> <br> <a href="/api/products"> Products </a>`)
})


app.get('/api/products',(req,res)=>{
    
    // res.json(products)


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
    res.send(` <h1> HELLO WORLD </h1> `)
})



//! Now to implement this serach and limit operations using queries we need to write the code like following :

app.get('/api/v1/query',(req,res)=>{

    // console.log(req.query);
    // res.send(`<h1>HELLO WORLD 2 </h1>`);

    const {search,limit} = req.query
    
    //! "..." splits elements in an array and makes them individual elements  
    let sortedProducts = [...products]

    if(search){

        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })

    }
    
    if(limit){
        
        sortedProducts = sortedProducts.slice(0, Number(limit))

    }

   if(sortedProducts.length<1){
         
        // res.status(200).send(`No Products match your Search`) //! returns Headers error because of not returning inside multiple if statements is you do if so make sure to add "return"
    
        // so we eplicitly send json data
        return res.status(200).json({success:true,data:[]})
    }
    
    //* Show all the products 
    res.status(200).json(sortedProducts)


    //! there is no need tho but still if the header error persists try below line if you want another if statement
    //! return res.status(200).json(sortedProducts)
    
})



app.all('*',(req,res)=>{
    res.status(404).send(`<h1> Resource Not Found </h1>`)
})

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})