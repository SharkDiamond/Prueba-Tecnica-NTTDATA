//IMPORTACIONES
const Server=require('./Models/Server.js');
//INSTANCIANDO UN OBJETO
const servidor=new Server();
//ESCUCHANDO EN EL PUERTO
servidor.listen();