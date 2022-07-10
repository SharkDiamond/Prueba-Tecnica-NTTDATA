//IMPORTACIONES
import { BuscarUsuario } from '../Context/user-search';
import { NavLink, useParams } from 'react-router-dom';
import {React,useContext} from 'react';

export default function UsersTableListSearch() {
  
  
      //OBTENIENDO LOS PARAMETROS DE LA URL
      const {tipoGrafica} = useParams();
      //OBTENIENDO LA LISTA DE USUARIOS DEL ESTADO GLOBAL
      const {listUserSearch}= useContext(BuscarUsuario);

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

{listUserSearch.map(({username,rol,correo,uid})=>
 
 <tr key={uid}>
   <td>{username}</td>
   <td>{rol}</td>
   <td>{correo}</td>
   <td >{ <NavLink to={`/Dashboard/${tipoGrafica}/perfilUsuario#${uid}`} className="btn btn-outline-primary">Perfil</NavLink>}</td>
 </tr>

)}
 
 </tbody>
    </table>
  )
}
