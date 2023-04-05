const user=require('../moduls/usersmoduls')
const {v4:uuidv4}=require('uuid');

const usercontrol=async(req,res)=>{
try {
    const users=await user.find();
    res.status(200).json(users);
} catch (error) {
    res.status(500).send(error.massage);
}

    }
const oneuser=async(req,res)=>{
    try {
        const users=await user.findOne({
            id:req.params.id,
        })
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.massage);
    }
}
const createuser=async(req,res)=>{
   try {
    const newuser=new user({
        id:uuidv4(),
        name:req.body.name,
        age:Number(req.body.age),
    })
   await newuser.save();
    res.status(201).json(newuser);
   } catch (error) {
    res.status(500).json({massage:'not found'});
   }
}
const update=(req,res)=>{
    res.status(201).json({
        massage:'this is update page',
    })
}
const delate=(req,res)=>{
    res.status(200).json({
        massage:'this is delate',
    })
}
module.exports={usercontrol,oneuser,createuser,update,delate};