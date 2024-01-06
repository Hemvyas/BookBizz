import jwt from "jsonwebtoken"
export const verifyToken=async(req,res,next)=>{
    const token=req.cookies.token;
    console.log("Received Token from Cookie:", token);
    if(!token)
    {
        return res.status(401).send("Unauthorized User");
    }
    try {
        jwt.verify(token,process.env.JWT,(error,user)=>{
            if (error) {
                console.error("JWT Verification Error:", error);
                return res.status(401).send("Unauthorized: Invalid Token");
              }
            req.user=user;
            next();
        });
        
    } catch (ex) {
        console.log(ex);
        res.status(400).send({auth:false,message:"Failed to authenticate token."})
    }
    
}