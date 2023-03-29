const express=require('express');
const app=express();
const port=3000;



//protiti alada peramitar,alada vabe req kore server a send kora hoi,,quari,params,header........

// query,,,
app.get('/',(req,res)=>{
   const id= req.query.id;
   const name=req.query.name;
    res.send(`<h1>student id: ${id}, name:${name}</h1>`);
});


//params,,,
//servera req korbo,,,,/userid/102/userage/23
// app.get('/userid/:id/userage/:age',(req,res)=>{
//    const id= req.params.id;
//    const age=req.params.age;

//    res.send(`<h1>student id:${id}, age:${age}</h1>`);
// });

//header,,,

// app.get('/',(req,res)=>{
//     const id=req.header.id;
//     const name=req.header.name;

//     res.send(`<h1>student id:${id}, age:${age}</h1>`);
// })
app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
});
