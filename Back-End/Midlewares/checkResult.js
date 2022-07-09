const {validationResult}=require('express-validator');

const validationExpress=(req,res,next)=>{

    //VERIFICANDO SI HAY ERRORES
    const {errors}=validationResult(req);
    //DEVOLVIENDO UN ERROR SI HAY UN PROBLEMA
    if (errors.length>0) return res.status(400).json({'Problems':errors}).end();
    
    next();

}


module.exports=validationExpress;