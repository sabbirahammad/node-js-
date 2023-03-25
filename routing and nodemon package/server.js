const http=require('http');
const fs=require('fs');

const pots=3000;
const hostName='127.0.0.1';

const b=http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('home.html',(arr,data)=>{
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        })
    }
   else if(req.url==='/about'){
        fs.readFile('about.html',(arr,data)=>{
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        })
    }
   else if (req.url==='/contract'){
        fs.readFile('contract.html',(arr,data)=>{
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        })
    }
    else{
        fs.readFile('error.html',(arr,data)=>{
            res.writeHead(404,{'content-type':'text/html'});
            res.write(data);
            res.end();
        })
    }
})

b.listen(pots,hostName,()=>{
    console.log(`server is successfull at http://${hostName}:${pots}`);
});