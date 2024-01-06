import express from "express"
const router=express.Router();
import {verifyToken} from "../verifyToken.js"
import { createRoom, delRoom, getAllRoom, getRoom, updateRoom } from "../controller/rooms.js";

router.post('/:hotelid',createRoom);

router.put('/:id',updateRoom);

router.delete('/:id/:hotelid',delRoom);

router.get('/:id',getRoom);

router.put('/',getAllRoom);


export default router;