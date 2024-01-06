import Hotel from "../models/Hotel.js";

export const createHotel=async(req,res)=>{
    const newHotel= new Hotel(req.body)
    try {
        const savedHotel=await newHotel.save();
        res.status(201).send(savedHotel);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const updateHotel=async(req,res)=>{
    try {
        if (req.user.isAdmin) {
            
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(201).send(updatedHotel);
    }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const delHotel=async(req,res)=>{
    try {
        if (req.user.isAdmin) {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(201).send("Hotel Deleted");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getHotel=async(req,res)=>{
    try {
        if (req.user.isAdmin) {
        const hotel =await Hotel.findById(req.params.id);
        res.status(201).send(hotel);
    }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getAllHotel=async(req,res)=>{
    const {min,max,...others}=req.query;
    try {
        const hotel =await Hotel.find({...others,price:{$gt:min | 1, $lt:max || 999},
        }).limit(6)
        res.status(201).send(hotel);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const countCity=async(req,res)=>{
    const cities=req.query.cities.split(",");
    try {
        const list =await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(201).send(list);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


export const countType=async(req,res)=>{
    try {
        const countHotel=await Hotel.countDocuments({type:"hotel"})
        const countApartment=await Hotel.countDocuments({type:"apartment"})
        const countResorts=await Hotel.countDocuments({type:"resort"})
        const countVilla=await Hotel.countDocuments({type:"villa"})
        const countCabin=await Hotel.countDocuments({type:"cabin"})

        res.status(200).json([
            { type:'hotel',count:countHotel},
            { type:'apartment',count:countApartment},
            {type:'resort',count:countResorts},
            {type:'villa',count:countVilla},
            {type:'cabin',count:countCabin},  
    ])
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error interno del servidor")
    }
}