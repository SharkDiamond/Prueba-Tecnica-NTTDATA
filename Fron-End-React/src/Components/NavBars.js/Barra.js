//IMPORTACIONES
import { Container,Navbar,Nav,Form ,FormControl,Button} from 'react-bootstrap';
import { BuscarUsuario } from '../../Context/user-search';
import { NavLink, useParams } from 'react-router-dom';
import React, { useContext } from 'react';


export default function Barra() {
  
    //SACANDO LOS PARAMENTROS DE LA URL
    const {tipoGrafica}=useParams();
    //OBTENIENDO ELEMENTOS DEL ESTADO GLOBAL BUSCARUSUARIO
    const {handleSearchUser,setSearchUser,searchUser}=useContext(BuscarUsuario);
    
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
    <Container >
    
    <NavLink to={`/Dashboard/${tipoGrafica}/usersTableList`} className='navbar-brand'>Users Manage</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">
          <NavLink  className='nav-link' to={`/Dashboard/${tipoGrafica}/CreateUsersForm`}>Create Users</NavLink>
          <NavLink  className='nav-link' to={`/Dashboard/${tipoGrafica}/DeleteUsersForm`}>Delete Users</NavLink>
          <NavLink  className='nav-link' to={`/Dashboard/${tipoGrafica}/UpdateUserForm`}>Actualizar Users</NavLink>
        </Nav>
        <Form className="d-flex" >
        <FormControl
          type="search"
          placeholder="Buscar Usuario"
          className="me-2"
          aria-label="Search"
          required
          value={searchUser}
          onChange={e=>setSearchUser(e.target.value)}
        />
        <Button onClick={handleSearchUser} disabled={searchUser.length===0 ? true : false} variant="outline-light">Buscar</Button>
      </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
