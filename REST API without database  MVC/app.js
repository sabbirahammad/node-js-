const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const userrouter=require('./routers/users.router.js');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//home route,,,
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
});
//users router...
app.use('/users',userrouter);
//404 not found massage,,,
app.use((req,res,next)=>{
    res.status(401).json({massage:"<h1>404 Not Found</h1>"});
});
app.use((err,req,res,next)=>{
    res.status(505).json({massage:'server is error'});
})
const port=process.env.port|| 4000;

app.listen(port,()=>{
    console.log(`this server is running:http://localhost:${port}`);
})

// module.exports=app;