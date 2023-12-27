const jwt = require("jsonwebtoken");

const verifyToken=(req,res,next)=>{
    const token=req.headers['authorization']
    const t=token.split(" ")[1]
    console.log(t);
    if(!t){
        res.status(400).json('token not found')
    }
    jwt.verify(String(t),"secretKey",(err,user)=>{
        if(err){
            console.log(err)
        }
        console.log('r',user)
    })

}

module.exports={verifyToken}