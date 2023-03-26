const http=require('http');
const fs=require('fs');
const port=200;

const filehead=(filename,status,req,res)=>{
    fs.readFile(filename,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.writeHead(status,{'content-type':'text/html'});
            res.write(data);
            res.end();
        }
    })
};

var server=http.createServer((req,res)=>{
    if(req.url==='/'){
       filehead('home.html',port,req,res);
    }
   else if(req.url==='/about'){
        filehead('about.html',port,req,res);
     }
    else if(req.url==='/contract'){
        filehead('contract.html',port,req,res);
     }
     else{
        filehead('error.html',404,req,res);
     }
});
server.listen(3000,()=>{
    console.log('server is running');
});