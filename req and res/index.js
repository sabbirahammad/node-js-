const express=require('express');
const app=express();
const port=3000;
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/regester',(req,res)=>{
    res.sendFile(__dirname +'/index.html');
});
app.post('/regester',(req,res)=>{
    const fullname=req.body.fullname;
    const id=req.body.id;
    res.send(`<h2>fullnaem:${fullname},id:${id}</h2>`);
})

// app.post('/user',(req,res)=>{
//     const name=req.body.name;
//     const id=req.body.id;
//     res.send(`wellcome : ${name},you are age:${id}`);
// })

app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
});