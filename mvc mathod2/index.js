const express=require('express');
const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}));
const users=[
    {
        name:"sabbir ahammad",
        age:23,
    },
    {
        name:"sammi islam",
        age:20,
    },
]
const htmlfile=`<form action="/users" method="POST">
<input type="text" name="name" id="" placeholder="enter any name:">
<input type="number" name="age" id="" placeholder="any age:">
<button type="submit">save</button>
</form>`;
app.get('/users',(req,res)=>{
    res.send(htmlfile);
})
app.post('/users',(req,res)=>{
    const name=req.body.name;
    const age=Number(req.body.age);

    const user={
        name,
        age,
    };
    users.push(user);
    res.status(201).json({
       users,
       name,
    })

})

app.listen(port,()=>{
    console.log(`this server is running:http://localhost:${port}`);
})