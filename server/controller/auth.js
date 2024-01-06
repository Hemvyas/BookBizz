import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup=async(req,res)=>{
    try {
        const hashpassword=await bcrypt.hash(req.body.password,10);
        const newUser=new User({...req.body,password:hashpassword});
        const savedUser=await newUser.save();
        res.status(201).send(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


export const signin=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email})
        if(!user)
        {
            return res.status(404).send("User not found");
        }
        const isPassword = await bcrypt.compare(req.body.password,user.password);
        if(!isPassword)
        {
            return res.status(400).send("Passwords Do not Match");
        }

        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT,{
            expiresIn:60*60*24*7,
        })
        res.cookie("token",token,{
            httpOnly:true,
            path: '/',
        })
        const {password,isAdmin,...other}=user._doc;
        res.status(201).json({...other,token});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
export const signout=async(req,res)=>{
    try {
        res.cookie("token","",{
            httpOnly:true
        })
        res.status(200).send("Signout Successful");
        } catch (error) {
        console.log(error);
        res.status(500).send(error);
        }
}

