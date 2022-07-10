//IMPORTACIONES
import {React,useEffect, useState} from 'react';
import errorManage from '../Helpers/errors';
import axios from 'axios';

export default function PerfilUsuario() {
  
    //ESTADO PARA LOS DATOS DEL USUARIO
    const [userData,setUserData]=useState({});

    //CICLO DE VIDA DE MONTAJE
    useEffect(() => {
      
       const [pageComponent,uidUser]= window.location.href.split('#');
        
       if (uidUser.length==0) return console.log('no se paso uid');
    
       const getUserForId=async ()=>{

         try {
          //PIDIENDO LOS DATOS
         const userList= await axios.get(`http://localhost:3006/Users/usersFindId/${uidUser}`,{
        
          headers:{"access-token":sessionStorage.getItem('token')}
  
          });
         
          setUserData(userList.data);

         } catch (error) {

            errorManage(error);
         
          }

        }

        getUserForId();


    }, []);
    
    
  return (
    <div>

      {Object.keys(userData).length===0 ? <h2 className='text-danger'>No existe un usuario con ese id</h2> :  <>
    <h2 className='text-white'>Nombre: {userData.nombre}</h2>

    <h2 className='text-white'>Apellido: {userData.apellido}</h2>

    <h2 className='text-white'>Correo Electronico: {userData.correo}</h2>

    <h2 className='text-white'>Username: {userData.username}</h2>

    <h2 className='text-white'>Rol: {userData.rol}</h2>

    <h2 className='text-white'>Direccion Fisica: {userData.direccionfisica}</h2>
    </>}
    
    </div>
  )
}
