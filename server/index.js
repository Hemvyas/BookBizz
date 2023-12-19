import express from "express"
import dotnev from "dotenv"
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"
import userRoutes from './routes/user.js'
import hotelsRoutes from "./routes/hotels.js"
import roomRoutes from "./routes/room.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express();
dotnev.config();
const port=process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
app.use(cookieParser());
app.use('/api/auth',authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/hotels",hotelsRoutes);
app.use("/api/rooms",roomRoutes);

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Mongodb Connected");
}).catch((error)=>{
    console.log(error);
})








app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
