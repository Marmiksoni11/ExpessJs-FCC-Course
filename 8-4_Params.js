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

//* app.get('/api/products/1',(req,res)=>{

//*     const singleProduct = products.find((product)=>{
//*         return product.id === 1;
//*     })

//*     res.json(singleProduct)

//* })


//! now for every product we cant HOT CODE every time 1,2,3 etc... so to avoid the above we do the following: 

app.get('/api/products/:productID',(req,res)=>{

    //? console.log(req);

    //*  returns product Id , like this { productID: '4' }
    //?  console.log(req.params);
    
    const {productID} = req.params;

    //* To show one single product 

    const singleProduct = products.find((product)=>{
        //TODO return product.id === Number(req.params)
         return product.id === Number(productID)
    });


    //TODO This is to check the following :
    //* when the user hits a product which does not exist then it dont give "resource  not found" instead it gives a blank screen which is why we console log it.

    //! returns undefined
    //* console.log(singleProduct); 

    //? to avoid the above we place an if condition 
    
    if(!singleProduct){
        return res.status(404).send(`<h1> Product does not exist. </h1>`)
    }
    else{
        return res.json(singleProduct)
    }

})


//* Below is to show that the req.params is very useful  as there can be wayy more complex urls with multiple parametres  

//* I gave two params in the below url : productID and reviewID
 
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params); //* returns : { productID: '1', reviewID: 'asd' }
    res.send(`<h1>HELLO WORLD</h1>`)
})



app.all('*',(req,res)=>{
    res.status(404).send(`<h1> Resource Not Found </h1>`)
})

app.listen(5000,()=>{
    console.log(` Server is listening on Port 5000... `);
})