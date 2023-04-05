const express=require('express');
const multer=require('multer');
const app=express();
const mongoose=require('mongoose');
const port=3000;

//connect to DB,,,

const connectbd=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/userDB');
        console.log('db is connected');
    } catch (error) {
        console.log('db is not connected');
        console.log(error);
        // process.exit(1);
    }
}

//file uplode,,,

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uplodes');
    },
    filename:function(req,file,cb){
        const name=Date.now()+'-'+file.originalname;
        cb(null,name);
    }
})
const uplode=multer({storage:storage});
app.get('/',(req,res)=>{
    res.send('server is open:');
})

app.get('/regester',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/regester',uplode.single('image'),(req,res)=>{
    res.status(200).send('file is uplode');
})
app.listen(port,async()=>{
    console.log(`this server is running:http://localserver:${port}`);
    await connectbd();
})