const {dbConection}=require('../Database/config');
const express=require('express');
const cors=require('cors');

class Server{

    constructor(){

        this.ConectarDB();
        
        this.app=express();

        this.midlewares();

        this.routes();

    }

    routes(){
      
       //RUTA PARA USUARIOS
       this.app.use("/Users",require("../routes/Users.js"));

    }

    midlewares(){

        this.app.use(express.json());

        this.app.use(cors({exposedHeaders: ['Content-Disposition']}));

    }

    async ConectarDB(){

        await dbConection();

    }


    listen(){

        this.app.listen(3006,()=>{

            console.log('Server Up in port 3006');

        });

    }

}

module.exports=Server;