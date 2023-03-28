const port=3000;
//  const app=require("./app");
// const router=require('./router');
// app.use(router);
const express=require('express');
// const  route = require('./app');
const app=express();
const router=express();

app.use('/home',(req,res)=>{
    // res.send('home server is open');
//    res.cookie('name','sabbir');
//    res.cookie('age','23');
//    res.cookie('depertment','cse');
res.clearCookie('name');
res.append('id','000033');
   res.end();
});
app.use('/resister',(req,res)=>{
    // res.send('resister server is open');
    // res.status(200).json({
    //     massage:'this code is successfull',
    //     statusCode:200,
    // });
    // res.redirect('/login');
    //  res.statusCode = 200;
    res.sendFile(__filename+"/views.html");
    res.send('hi sabbir');
});
app.use('/login',(req,res)=>{
    res.send('login server is open');
});
app.use((req,res)=>{
    res.send('<h1>404 not found</h1>');
});
// router.get('/',(req,res)=>{
//     res.send('<h1>iam a get request al home page</h1>');
// });
// router.get('/filehome',(req,res)=>{
//     res.send('<h1>iam a get request al filehome page</h1>');
// })
// router.get('/login',(req,res)=>{
//     res.send('<h1>iam a get request al login page</h1>');
// })
app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
});
