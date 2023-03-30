const express=require('express');
const app=express();
const port=3000;

app.get('/products/:id([0-9]{3})',(req,res)=>{
    const id=req.params.id;
    res.send(`id=${id}`);
})
app.get('/products/:title([a-zA-Z0-9]+)',(req,res)=>{
    const title=req.params.title;
    res.send(`title=${title}`);
})
app.use('*',(req,res)=>{
    res.status(404).send('not a volid route');
})
app.listen(port,()=>{
    console.log(`this server is running:http://localhost:${port}:`);
})