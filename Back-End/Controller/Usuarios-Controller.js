//IMPORTACIONES
const generateJWT = require('../Helpers/GenerateJWT');
const Usuario=require('../Models/Users-Schema');
const encripta=require('bcryptjs');

//VALIDAR SESION USUARIO
const validateUser=async(req,res) => { 

    try {

        //DESESTRUCTURANDO EL OBJETO BODY
        const {username,password}=req.body;
        //INSTANCIANDO EL NUEVO USUARIO
        const usuario=await Usuario.findOne({username});
        //VERIFICAR SI EL EMAIL EXISTE
        if(!usuario || !usuario.estado) return res.status(400).json({msg:"El usuario no existe"}).end();
        //VERIFICAR EL PASSWORD
        const validPassword = encripta.compareSync(password,usuario.password);
        //EN DADO CASO DE SER INCORRECTO
        if (!validPassword) return res.status(400).json({msg:"El password no es correcto"}).end();
        //GENERAR EL JWT
        const token=await generateJWT(username);
        //RESPONDIENDO QUE LA PETICION FUE EXITOSA
        res.json({
            usuario,
            token,
        msg:"Login ok"
        }).end();

    } catch (error) {
       res.status(500).json("Ocurrio un error en el servidor "+error.message).end(); 
    }

}
//CREAR UN NUEOV USUARIO
const createUsers= async(req,res) => {

    try {
        
        //DESESTRUCTURANDO EL OBJETO BODY
        const {nombre,apellido,correo,direccionfisica,rol,username,password}=req.body;
        //ISNTANCIANDO EL USUARIO
        const usuarioNew= new Usuario({nombre,apellido,correo,direccionfisica,rol,username,password});
        //EN DADO CASO DE EXISTIR UN USUARIO CON ESE USERNAME
        if (await Usuario.findOne({username})) return res.status(400).json({msg:`El nombre de usuario ${username} ya esta registrado`});
        //EN DADO CASO DE EXISTIR UN USUARIO CON ESE USERNAME
        if (await Usuario.findOne({correo})) return res.status(400).json({msg:`Ya existe un usuario registrado con el correo ${correo}`});
        //GENERANDO LOS SALTOS
        const salt=encripta.genSaltSync();
        //ENCRITANDO EL PASSWORD
        usuarioNew.password=encripta.hashSync(password,salt);
        //GUARDANDO EL USUARIO EN LA BASE DE DATOS
        await usuarioNew.save();
        //RESPNDIENDO LA PETICION COMO EXITOSA
        res.status(203).json({
            msg: 'Usuario creado exitosamente',
            usuarioNew
            }).end();

    } catch (error) {
       res.status(500).json("Ocurrio un error en el servidor"+error.message).end(); 
    }

}
//OBTENER USUARIOS
const getUsers=async(req,res) => { 

    try {
        
        const usuarios=await Usuario.find({estado:true});

        res.status(200).json(usuarios).end();

    } catch (error) {
       res.status(500).json("Ocurrio un error en el servidor"+error.message).end(); 
    }

}
//ELIMINAR USUARIO
const deleteUsers=async(req,res) => { 

    try {
     //DESESTRUCTURANDO EL OBJETO BODY
     const {username}=req.body;
     //EN DADO CASO DE EXISTIR UN USUARIO CON ESE USERNAME
     if (!await Usuario.findOne({username,estado:true})){
        //SACANDO LA NUEVA LISTA DE USUARIOS
        const newListUsers=await Usuario.find({estado:true});

        return res.status(404).json({msg:`No existe un usuario ${username}`,newListUsers});
     } 
     //CAMBIANDO EL ESTADO A FALSE 
     await  Usuario.findOneAndUpdate({username},{estado:false});
     //SACANDO LA NUEVA LISTA DE USUARIOS
     const newListUsers=await Usuario.find({estado:true});
     //RESPONDIENDO CON EL USUARIO ELIMINADO
     res.status(200).json({msg:`usuario ${username} eliminado`,
                           newListUsers}).end();  

    } catch (error) {
       res.status(500).json("Ocurrio un error en el servidor"+error.message).end(); 
    }

}
//ACTUALIZAR USAURIO
const updateUsers=(req,res) => { 

    try {
        
    } catch (error) {
       res.status(500).json("Ocurrio un error en el servidor"+error.message).end(); 
    }

}

const getUserForUid=async(req,res) => { 

  try {
    
    //BUSCANDO EL USUARIO CON EL ID 
    const userFind=await Usuario.findById(req.params.uid);
    //CREANDO UNA VARIABLE CON EL MENSAJE GENERAL DE QUE NO EXISTE
    const messageNotExist=`No existe un usuario con ese el id ${req.params.uid}`;
    //EN DADO CASO NO HAYA UN USUARIO
    if (!userFind) return res.status(404).json(messageNotExist).end();
    //EN DADO CASO LO HAYA PERO SU ESTADO SEA FALSE
    if (!userFind.estado) return res.status(404).json(messageNotExist).end();
    //RESPONDIENDO CON LOS DATOS DEL USUARIO ENCONTRADO
    res.status(200).json(userFind).end();

   } catch (error) {
        res.status(500).json("Ocurrio un error en el servidor"+error.message).end(); 
     }

 }


module.exports={

    validateUser,
    createUsers,
    getUsers,
    deleteUsers,
    updateUsers,
    getUserForUid

}