const mongoose=require('mongoose');

const userSchma=mongoose.Schema({
    id:{
        type:String,
        reuire:true
    },
    name:{
        type:String,
        reuire:true
    },
    age:{
        type:Number,
        reuire:true
    },
    // createon:{
    //     type:Date,
    //     default:Date.now,
    // },
});
module.exports=mongoose.model('user',userSchma);