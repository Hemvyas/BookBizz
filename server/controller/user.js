import User from "../models/User.js";

export const verifyUser=async(req,res,next)=>{
    if(req.user.id===req.params.id || req.user.isAdmin)
    {
        next();
    }
    else{
        res.status(403).json({
            message:"You are not authorized to perform this action"
        })
    }
}

export const verifyAdmin=async(req,res,next)=>{
    if(req.user.isAdmin)
    {
        next();
    }
    else{
        res.status(403).json({
            message:"You are not authorized to perform this action"
        })
    }
}

export const updateUser=async(req,res)=>{
    try {
        if(req.user.id===req.params.id || req.user.isAdmin)
        {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(201).send(updatedUser);
    }
    else{
        res.status(403).send("Unauthorized User");
    }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const delUser=async(req,res)=>{
    try {
        if (req.user.id===req.params.id || req.user.isAdmin) {
        await User.findByIdAndDelete(req.params.id);
        res.status(201).send("User Deleted");
    }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getUser=async(req,res)=>{
    try {
        if (req.user.id===req.params.id || req.user.isAdmin) {
        const user =await User.findById(req.params.id);
        res.status(201).send(user);
    }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getAllUser = async (req, res) => {
    try {
        console.log(req.user);
        if (req.user.isAdmin) {
            const users = await User.find();
            res.status(200).send(users);
        } else {
            res.status(403).send("Access forbidden. Admin privileges required.");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

