import express from "express"
const router=express.Router();
import {verifyToken} from "../verifyToken.js"
import { createRoom, delRoom, getAllRoom, getRoom, updateRoom } from "../controller/rooms.js";

router.post('/:hotelid',verifyToken,createRoom);

router.put('/:id',verifyToken,updateRoom);

router.delete('/:id/:hotelid',verifyToken,delRoom);

router.get('/:id',verifyToken,getRoom);

router.put('/',verifyToken,getAllRoom);


export default router;