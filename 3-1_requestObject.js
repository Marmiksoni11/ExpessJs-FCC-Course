const http = require('http')

let server = http.createServer((req,res)=>{

    console.log("User hit the server");


    console.log(req.method); //* GET

    console.log(req.url); //* returns the url


    res.writeHead(200,{'content-type':'text/html'});
    res.write(`<h1>Home Page</h1>`);
    res.end()

})


server.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})