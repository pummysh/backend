const express=require('express');

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Yeah i did it ........");
})

module.exports = router;