const express=require('express');
const app=express();
const port=3000;

const myMiddleWare=(req,res,next)=>{
    req.currenttime=new Date(Date.now());
    next();
}

app.get('/',myMiddleWare,(req,res)=>{
      res.send('home server');
      console.log('this time:'+req.currenttime);
})

app.listen(port,()=>{
    console.log(`server is running:http://localhost:${port}`)
})