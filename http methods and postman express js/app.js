const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('iam a get request al home page');
});
app.get('/about',(req,res)=>{
    res.send('iam a get request al about page');
});
app.get('/come',(req,res)=>{
    res.send('iam a get request al home and come page');
});
module.exports=app;