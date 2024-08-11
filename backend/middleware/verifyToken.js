import jwt from "jsonwebtoken"

export const verifyToken = (req,res,next) => {
    const token = req.cookies.accessToken
    if(!token) return res.status(401).send("Unauthorized")
    
     jwt.verify(token, process.env.JWT_KEY, async (err, payload)=>{
        if(err) return res.status(403).send("Invalid token!")
        req.userId = payload.id
        req.isAdmin = payload.isAdmin
        next()   
     })   
}