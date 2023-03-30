const express=require('express');
const app=express();
const PORT=3000;
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
app.get('/circle',(req,res)=>{
    res.sendFile(__dirname+'/circle.html');
})
app.get('/tringle',(req,res)=>{
    res.sendFile(__dirname+'/tringle.html')
})
app.post('/tringle',(req,res)=>{
    const height=req.body.height;
    const base=req.body.base;
    const area=0.5*base*height;
    res.send(`<h2>area of tringle:${area}</h2>`);
});
app.post('/circle',(req,res)=>{
    const radius=req.body.radius;
    const circle=Math.PI*radius*radius;
    res.send(`area of circle:${circle}`);
})
app.listen(PORT,()=>{
    console.log(`this server is running:http://localhost:${PORT}`);
})