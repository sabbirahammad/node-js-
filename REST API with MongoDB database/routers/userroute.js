const express=require('express');
const {usercontrol, createuser} = require('../controlars/controlar');
const router=express.Router();

router.get('/',usercontrol);
router.post('/',createuser);
module.exports=router;