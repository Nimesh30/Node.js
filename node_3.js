const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{

    if(req.url==="/favicon.ico") return res.end;
    const log =`${Date.now()} : ${req.method} ${req.url} New request recieved..\n`;
    const myurl = url.parse(req.url,true);
    // console.log(myurl);
    fs.appendFile("log.txt",log,(err,data)=>{

        switch (myurl.pathname) {
            case "/":
                 if(req.method==="GET")res.end("<h1>Home Page....</h1>");
            break;

            case "/about": 
            const username = myurl.query.myname;
            res.end(`<h1>hi,${username}</h1>`);
            break;
           
            case "/search": 
            const search = myurl.query.search_query;
            res.end("<h1>Here are your result for </h1>" + search);
            break;
            
            case "/signup": 
            if(req.method==="GET"){
                res.end('<h1>this is a sign up form...</h1>')
            }
            else if(req.method==="POST"){ req.end("<h1>success</h1>"); }
            break;
            
            default: res.end("<h1>404 - WebPage not found</h1>");
            break;                      
        }
    });    
});

myServer.listen(8000,()=>{
    console.log("Server Started...")
});