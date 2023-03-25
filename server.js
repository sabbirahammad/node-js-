const http=require('http');
const fs=require('fs');

const pots=3000;
const hostName='127.0.0.1';

const b=http.createServer((req,res)=>{

    heandfile=(code,tag)=>{
 fs.readFile(tag,(arr,data)=>{
            res.writeHead(code,{'content-type':'text/html'});
            res.write(data);
            res.end();
    });
    }

    if(req.url==='/'){
        heandfile(200,'home.html');
    }
   else if(req.url==='/about'){
    heandfile(200,'about.html');

    }

   else if (req.url==='/contract'){
    heandfile(200,'contract.html');
    }
    else{
        heandfile(404,'error.html');
    }
    });

b.listen(pots,hostName,()=>{
    console.log(`server is successfull at http://${hostName}:${pots}`);
});