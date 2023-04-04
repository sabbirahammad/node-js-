
const express=require('express');
const { getallusers,createUser, uplodeusers, delateusers } = require('../controlars/control');
const router=express.Router();

router.get('/',getallusers);
router.post('/',createUser);
router.put('/:id',uplodeusers);
router.delete('/:id',delateusers);

module.exports=router;