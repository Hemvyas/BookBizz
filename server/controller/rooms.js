import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"

export const createRoom=async(req,res)=>{
    const hotelid=req.params.hotelid;
    const newRoom=new Room(req.body);
    try {
        const savedRoom=await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelid,{
                $push:{rooms:savedRoom._id}
            })
        } catch (error) {
            console.log(error);
        }
        res.status(201).send(savedRoom);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}



export const updateRoom=async(req,res)=>{
    try {
        if (req.user.isAdmin) {
            
        const updatedRoom=await Room.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(201).send(updatedRoom);
    }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}



export const delRoom=async(req,res)=>{
    const hotelid=req.params.hotelid;
    const roomid=req.params.id;
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelid,{
                $pull:{rooms:roomid}
            }
            )
        } catch (error) {
            console.log(error);
        }
        res.status(201).send('room deleted');
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getRoom=async(req,res)=>{
    try {
        if (req.user.isAdmin) {
        const room =await Room.findById(req.params.id);
        res.status(201).send(room);
    }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


export const getAllRoom=async(req,res)=>{
    try {
        const room =await Room.find();
        res.status(201).send(room);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}