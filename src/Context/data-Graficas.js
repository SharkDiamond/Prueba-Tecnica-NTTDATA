//IMPORTACIONES
import  { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import errorManage from "../Helpers/errors";
import axios from "axios";

//CREANDO EL CONTEXTO Y EXPORTANDOLO
export const GraficasContext = createContext();

const GraficaDatos = ({ children }) => {
  
   //ESTADOS
  //PARA LOS DATOS DE LA GRAFICA DE BARRA
  const [dataBarra, setDataBarra] = useState([0,0,0]);
  //PARA LOS DATOS DE LA GRAFICA LINEAL
  const [dataLineal, setDataLineal] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);

  //NAVEGADOR PARA REDIRIGIR AL LOGIN
  const navegador=useNavigate();

  //FUNCION PARA OBTENER LOS DATOS DE LA BARRA
  const getDataBarra=async() => {

    try {

        //HACIENDO LA PETICION DE LOS USUARIOS
        const userList= await axios.get(`http://localhost:3006/Users/usersList`,{

            headers:{
              "access-token":sessionStorage.getItem('token')
            }
    
        });
        //CREANDO EL OBJETO PARA ALMACENAR LAS CANTIDADES SEGUN EL TIPO DE CLIENTE
        const cantidadClientesRol={

                admin:0,
                basico:0,
                vendedor:0

        };
        //RECORRIENDO LA LISTA DE USUARIOS
        userList.data.forEach(({rol}) => {
           
          if (Object.keys(cantidadClientesRol).includes(rol)) cantidadClientesRol[rol]=cantidadClientesRol[rol]+1;
            
        });
        //ACTUALIZANDO LOS DATOS DE LA GRAFICA
        setDataBarra(Object.values(cantidadClientesRol));

    } catch (error) {
      
        errorManage(error,navegador);

    }


  }

  //FUNCION PARA OBTENER LOS DATOS DE LA GRAFICA
  const getDataLineal=async() => { 
    
    try {

       //HACIENDO LA PETICION DE LOS USUARIOS
       const userList= await axios.get(`http://localhost:3006/Users/usersList`,{

          headers:{
             "access-token":sessionStorage.getItem('token')
              }
       });
       //OBJETO PARA GUARDAR LOS DATOS SEGUN EL MES
       const mesesData={

        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0


       };
        //RECORRIENDO LA LISTA DE USUARIOS
        userList.data.forEach(({fechaCreacion}) => {
          
          //OBTENIENDO EL MES Y CONVIRTIENDOLO A STRING
          let mesFecha=new Date(fechaCreacion).getMonth().toString();
         
          if (Object.keys(mesesData).includes(mesFecha)) mesesData[mesFecha] = mesesData[mesFecha]+1;
          
        });
        //ACTUALIZANDO LOS DATOS DE LA GRAFICA
        setDataLineal(Object.values(mesesData));

    } catch (error) {
        errorManage(error,navegador);
    }


   }

  //OBJETO QUE SE VA A PASAR GLOBAL
  const contextValue = {
    
    dataBarra,
    dataLineal,
    getDataBarra,
    getDataLineal

  };

  return (
    <GraficasContext.Provider value={contextValue}>{children}</GraficasContext.Provider>
  );
};

export default GraficaDatos;