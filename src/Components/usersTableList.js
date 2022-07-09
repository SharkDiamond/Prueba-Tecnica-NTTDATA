//IMPORTACIONES
import {React,useEffect, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

export default function UsersTableList() {
  
    //ESTADOS
    //PARA PINTAR LA LISTA DE USUARIOS
    const [listaUsuarios,setListaUsuarios]=useState([]);
    
     const {tipoGrafica} = useParams();


    //CICLO DE VIDA DE MONTAJE
    useEffect(() => {
    
      try {
        
        const getUsersList=async() => {
          //PIDIENDO LOS DATOS
          const userList= await axios.get(`http://localhost:3006/Users/usersList`,{
  
          headers:{"access-token":sessionStorage.getItem('token')}
  
          });
         
            //ACTUALIZANDO EL ESTADO DE LA LISTA DE USUARIOS
            setListaUsuarios(userList.data);
  
         }

         getUsersList();
  
      } catch (error) {
        
      }
  
  
    }, []);

    return (
        <table class="table table-dark">
       <thead>
    <tr>
      <th scope="col">Usuario</th>
      <th scope="col">Rol</th>
      <th scope="col">Correo</th>
      <th scope="col">Opcion</th>
    </tr>
  </thead>
  <tbody>

  {listaUsuarios.map(({username,rol,correo,uid})=>
    
    <tr key={uid}>
      <td>{username}</td>
      <td>{rol}</td>
      <td>{correo}</td>
      <td ><NavLink to={`/Dashboard/${tipoGrafica}/perfilUsuario#${uid}`} className="btn btn-outline-light">Perfil</NavLink></td>
    </tr>

  )}
    
    </tbody>
       </table>
       
      
  )
}
