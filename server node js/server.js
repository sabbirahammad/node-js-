const http=require('http');

const port=2555;
const hostname='127.0.0.1';
const myserver=http.createServer((req,res)=>{
    res.writeHead(203,{'content-type':'text/html'});
    res.write('<h1>iam your first server</h1>');
    res.end();
});
myserver.listen(2555,hostname,()=>{
    console.log(`my server is running successfull at http://${hostname}:${port}`);
});