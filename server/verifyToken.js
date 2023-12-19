import jwt from "jsonwebtoken"
export const verifyToken=async(req,res,next)=>{
    const token=req.cookies.token;
    console.log("Token:",token);
    console.log('Received Token:', token);
    if(!token)
    {
        return res.status(401).send("Unauthorized User");
    }
    jwt.verify(token,process.env.JWT,(error,user)=>{
        if (error) {
            console.error("JWT Verification Error:", error);
            return res.status(401).send("Unauthorized: Invalid Token");
          }
        req.user=user;
        next();
    });
}