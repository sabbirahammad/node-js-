const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('<h1>iam a get request al home page</h1>');
});
router.get('/filehome',(req,res)=>{
    res.send('<h1>iam a get request al filehome page</h1>');
})
router.get('/login',(req,res)=>{
    res.send('<h1>iam a get request al login page</h1>');
})

module.exports=router;