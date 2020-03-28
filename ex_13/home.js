var express =require('express');
var router =express.Router();

router.get('/',(req,res)=>res.send('This is my Home page using Express Router'));

module.exports=router;