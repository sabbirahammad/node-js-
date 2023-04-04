let users=require('../models/users.js')
const{v4:uuidv4}=require('uuid');

//getusers....

const getallusers=(req,res)=>{
    res.status(201).json({users});
};

//createusers....

const createUser=(req,res)=>{
    const createuser={
        id:uuidv4(),
    username:req.body.username,
    gmail:req.body.gmail,
    };
    users.push(createuser);
    res.status(201).json(users);
};
//uplodeusers...
const uplodeusers=(req,res)=>{
    const userid=req.params.id;
    const {username,gmail}=req.body;
    users.filter((user)=>user.id==userid).map(
        (selectuser)=>{
            selectuser.username=username;
            selectuser.gmail=gmail;
        }
    )
   res.status(200).json(users);
};

//delateusers....
const delateusers=(req,res)=>{
   const userid=req.params.id;
   users=users.filter((user)=>user.id!==userid)

    res.status(201).json(users);
};

module.exports={getallusers,createUser,uplodeusers,delateusers};