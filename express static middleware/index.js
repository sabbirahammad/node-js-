const express=require('express');
const app=express();
const port=3000;
app.use(express.static('css'));
app.use(express.static('image'));

// app.get('/home',(req,res)=>{
//     res.sendFile(__dirname+'/index.html');
// })
app.get('/fariya',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
app.listen(port,()=>{
    console.log(`this server is running:http://localhost:${port}`);
})