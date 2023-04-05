const express=require('express');
const app=express();
const cors=require('cors');
const userrouter=require('./routers/userroute.js');
const config=require('./config/config.js');
require('./config/db.js');

const port=config.app.port;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/users',userrouter)

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
});
app.use((req,res,next)=>{
    res.status(404).json({massage:'404 not found'});
});
app.use((err,req,res,next)=>{
    res.status(505).json({massage:'somethins broke:'});
})
app.listen(port,()=>{
    console.log(`server is running:http://localhost:${port}`);
})
