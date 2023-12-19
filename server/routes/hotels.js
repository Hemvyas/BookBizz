import express from "express"
const router=express.Router();
import { countCity, createHotel, delHotel, getAllHotel, getHotel, updateHotel } from "../controller/hotels.js";
import {verifyToken} from "../verifyToken.js"
//create hotel
router.post('/',verifyToken,createHotel);

//update hotel
router.put('/:id',verifyToken,updateHotel)

//delete hotel
router.delete('/:id',verifyToken,delHotel)

//get hotel
router.get('/find/:id',verifyToken,getHotel)

//get all hotel
router.get('/',getAllHotel)

//countCity
router.get('/countCity',verifyToken,countCity)

// countType
router.get('/countType',verifyToken,getAllHotel)




export default router;