import express from "express"
const router=express.Router();
import { countCity, createHotel, delHotel, getAllHotel, getHotel, updateHotel,countType } from "../controller/hotels.js";
//create hotel
router.post('/',createHotel);

//update hotel
router.put('/:id',updateHotel)

//delete hotel
router.delete('/:id',delHotel)

//get hotel
router.get('/find/:id',getHotel)

//get all hotel
router.get('/',getAllHotel)

//countCity
router.get('/countCity',countCity)

// countType
router.get('/countType',countType)




export default router;