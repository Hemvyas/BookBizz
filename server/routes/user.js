import express from "express"
import { delUser, getAllUser, getUser, updateUser, verifyAdmin, verifyUser } from "../controller/user.js";
import { verifyToken } from "../verifyToken.js";
const router=express.Router();

router.get('/authentication',verifyToken,(req,res)=>{
    res.send("Authenticated");
})

router.get('/check/:id',verifyToken,verifyUser,(req,res)=>{
    res.send('Unathorized');
})

router.get("/admin/:id",verifyAdmin,(req,res)=>{
    res.send("Admmin")
})

//update
router.put('/:id',verifyToken,updateUser)

//del
router.delete('/:id',verifyToken,delUser)

// getUser
router.get('/:id',verifyToken,getUser)

// getAllUser
router.get('/',verifyToken,getAllUser)


export default router;