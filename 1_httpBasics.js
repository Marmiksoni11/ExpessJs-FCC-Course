const http = require('http')

let server = http.createServer((req,res)=>{
    console.log("User hit the server")
    res.end()
})

server.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})