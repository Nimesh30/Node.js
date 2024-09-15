const http = require('http');
const fs = require('fs');

const fileContent = fs.readFileSync('sample.txt','utf-8');
console.log(fileContent);
const server = http.createServer((req,res)=>{
    console.log("we are in server...");
    
    res.writeHead(200,{'content-type':'text/utf-8'});
    res.end(fileContent);
    })

    server.listen(80,'127.0.0.1',()=>{
        console.log("Listing port on 80")
    })
   
    console.log("we are out of the  server...")
    
