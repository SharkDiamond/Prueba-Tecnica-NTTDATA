import { logDOM } from '@testing-library/react';
import axios from 'axios';
import {React,useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export default function PerfilUsuario() {
  

  const {MostrarPanelIzquierdo}=useParams();

  const [userData,setUserData]=useState({});


    useEffect(() => {
      
      try {
 
       const [pageComponent,uidUser]= window.location.href.split('#');
        
       if (uidUser.length==0 ) console.log('no se paso uid');
    
       const getUserForId=async ()=>{

         //PIDIENDO LOS DATOS
         const userList= await axios.get(`http://localhost:3006/Users/usersFindId/${uidUser}`,{
        
          headers:{"access-token":sessionStorage.getItem('token')}
  
          });
         
          console.log(userList.data);
          setUserData(userList.data);

        }
        getUserForId();


      } catch (error) {
        
      }


    }, []);
    
    
  return (
    <div>

    <h2 className='text-white'>Nombre: {userData.nombre}</h2>

    <h2 className='text-white'>Apellido: {userData.apellido}</h2>

    <h2 className='text-white'>Correo Electronico: {userData.correo}</h2>

    <h2 className='text-white'>Username: {userData.username}</h2>

    <h2 className='text-white'>Rol: {userData.rol}</h2>

    <h2 className='text-white'>Direccion Fisica: {userData.direccionfisica}</h2>

    </div>
  )
}
