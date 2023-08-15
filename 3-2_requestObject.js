const http = require('http')

let server = http.createServer((req,res)=>{
    
    // console.log("User Hit the Server");
    // console.log(req.method);
    // console.log(req.url);

    const url = req.url;
    
    if(url === '/'){
        res.writeHead(200, { 'content-type' : 'text/html' });
        res.write(`<h1>Home Page</h1>`);
        res.end();
    }
    else if(url === '/contact'){
        res.writeHead(200, { 'content-type' : 'text/html' });
        res.write(`<h1>Contact Page</h1>`);
        res.end();
    }
    else if(url === '/about'){
        res.writeHead(200, { 'content-type' : 'text/html' });
        res.write(`<h1>About Page</h1>`);
        res.end();
    }

    else{
        res.writeHead(404, { 'content-type' : 'text/html' });
        // res.write(`<h1>Content Not Found</h1>`);
        res.end();
    }
})

server.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})