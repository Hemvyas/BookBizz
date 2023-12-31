import mongoose from "mongoose"
const roomSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    maxPeople:{
        type:String,
        required:true
    },
    roomNumbers:[{number:Number,unavailableDates:[{type:[Date]}]}],
    desc:{
        type:String,
        required:true
    }
},
{timestamps:true})

export default mongoose.model("Room",roomSchema);