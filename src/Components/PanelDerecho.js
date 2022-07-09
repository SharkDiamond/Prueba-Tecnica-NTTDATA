import { Button, Col } from 'react-bootstrap';
import {React,useEffect, useState} from 'react';
import axios from 'axios';

export default function PanelDerecho() {
  

  const [listaUsuarios,setListaUsuarios]=useState([]);
  //CICLO DE VIDA DE MONTAJE
  useEffect(() => {
  
    try {
      
      const getUsersList=async() => { 

        const userList= await axios.get(`http://localhost:3006/Users/usersList`,{

        headers:{

          "access-token":sessionStorage.getItem('token')

        }

        });

          setListaUsuarios(userList.data);

          console.log(listaUsuarios);
       }


       getUsersList();


    } catch (error) {
      
    }


  }, []);
  
  
  return (
    <Col className='bg-dark rounded p-3'>
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

  {listaUsuarios.map(({username,rol,correo})=>
    
    <tr>
      <td>{username}</td>
      <td>{rol}</td>
      <td>{correo}</td>
      <td ><Button  variant="outline-light">Perfil</Button></td>
    </tr>

  )}
    
    </tbody>
       </table>
       
      
    </Col>
  )
}
