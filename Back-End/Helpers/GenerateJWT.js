const jwt=require('jsonwebtoken');

const generateJWT=(user)=>{
    
    //RETORNANDO UNA PROMESA
    return new Promise((resolve,reject)=>{
        //FIRMANDO EL TOKEN
        jwt.sign({data:user},'TESTREWRWER123@a',{expiresIn:'1h'},(err,token)=>{
            //EN DADO CASO OCURRA UN ERROR
            if (err) reject(error.message);
            //SI TODO SALE BIEN
            resolve(token);
        });
    
    });

}

module.exports=generateJWT;