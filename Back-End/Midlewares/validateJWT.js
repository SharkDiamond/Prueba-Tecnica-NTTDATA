const jwt=require('jsonwebtoken');

const validarJWT= async (req,res,next)=>{

    const token=req.header('access-token');

    if (!token) res.status(401).json({msg:'No hay token en la peticion'}).end();
    
    try {

       jwt.verify(token,'TESTREWRWER123@a');


        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg:"token no valido"
        }).end();
    }

    //jwt.verify();

}


module.exports={

validarJWT

}