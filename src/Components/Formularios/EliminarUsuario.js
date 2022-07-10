import { GraficasContext } from '../../Context/data-Graficas';
import { useNavigate, useParams } from 'react-router-dom';
import UsersTableList from '../usersTableList';
import errorManage from '../../Helpers/errors';
import React, { useContext } from 'react';
import axios from 'axios';



export default function EliminarUsuario() {
  

  const navegador=useNavigate();

   //OBTENIENDO LOS METODOS PARA ACTUALIZAR LOS DATOS DE LA GRAFICA
   const {getDataBarra,getDataLineal}=useContext(GraficasContext);
  //OBTENIENDO LOS PARAMETROS DE LA URL
  const {tipoGrafica}=useParams();


  const deleteUser= async(username,updatelistUsers) => { 

    try {

      //HACIENDO LA PETICION PARA ELIMINAR EL USUARIO
       const deleteUser=await axios.delete('http://localhost:3006/Users/deleteUser',{
        headers:{
          'access-token':sessionStorage.getItem('token')
        },
        data: {
          username
        }

        });
        
        updatelistUsers(deleteUser.data.newListUsers);
        //EN DADO CASO ESTE LA GRAFICA DE BARRA PARA ACTUALIZARLA
        if (tipoGrafica==='GraficaBarra') await getDataBarra();
        //EN DADO CASO ESTE LA GRAFICA LINEAL PARA ACTUALIZARLA
        else if (tipoGrafica==='GraficaLineal') await getDataLineal();
        //INDICANDO QUE EL USUARIO FUE ELIMINADO
        alert(deleteUser.data.msg);
    
      } catch (error) {

      //PASANDOLE LOS DATOS AL MANEJADOR DE ERRORES  
      errorManage(error,navegador);
      //ACTUALIZANDO LA LISTA DE USUARIOS
      updatelistUsers(error.response.data.newListUsers);
      

    }

   }
  
  
  
  return (
    <>
      <UsersTableList tableType='deleteUsers' deleteUsersFunction={deleteUser} />
    
    </>
  )
}
