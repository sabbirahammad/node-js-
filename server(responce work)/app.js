const express=require('express');
const app=express();
// const router=require('./router/users.route');

app.use('/api/user',router);
app.use('/',(req,res)=>{
    res.send('this server is open');
});
app.use((req,res)=>{
    res.send('<h1>404 not found</h1>');
});
module.exports=app;

