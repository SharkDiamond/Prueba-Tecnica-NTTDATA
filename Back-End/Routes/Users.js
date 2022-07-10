//IMPORTACIONES
const { validateUser, createUsers, getUsers, deleteUsers, getUserForUid, searchUser } = require('../Controller/Usuarios-Controller');
const validationExpress = require('../Midlewares/checkResult');
const { validarJWT } = require('../Midlewares/validateJWT');
const { check } = require('express-validator');
const {Router}=require('express');




const enrutador=Router();


//VALIDAR USUARIO
enrutador.post('/validateUserSession',[check('username','El nombre de usuario es necesario').not().isEmpty(),
                                       check('password','El password es necesario').not().isEmpty(),
                                       validationExpress],validateUser);

//CREAR USUARIO
enrutador.post('/createUser',[check('nombre','el nombre del usuario es necesario').notEmpty(),
                              check('apellido','el apellido del usuario es necesario').notEmpty(),
                              check('apellido','el apellido del usuario es necesario'),
                              check('correo','el correo enviado no es valido').isEmail(),
                              check('direccionfisica','La direccion fisica es necesario').notEmpty(),
                              check('rol','el rol enviado no es valido').isIn(['admin','basico','vendedor']),
                              check('username','el nombre de usuario es necesario').notEmpty(),
                              check('password','el password enviado no es valido').notEmpty(),
                              validationExpress,validarJWT],createUsers);

//OBTENER USUARIOS
enrutador.get('/usersList',[validarJWT],getUsers);


//OBTENER USUARIO ESPECIFICO POR ID
enrutador.get('/usersFindId/:uid',[check('uid','el uid enviado no es valido').isMongoId(),
                                    validationExpress,
                                    validarJWT],getUserForUid);

enrutador.get('/usersSearch/:username',[validarJWT],searchUser);

//ELIMINAR USUARIO ESPECIFICO
enrutador.delete('/deleteUser',[check('username','el nombre de usuario es necesario').notEmpty()
                                ,validationExpress,validarJWT],deleteUsers);


module.exports=enrutador;
