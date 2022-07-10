//IMPORTACIONES
import { Container,Navbar,Nav,Form ,FormControl,Button} from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import React from 'react';

export default function Barra() {
  
    const {tipoGrafica}=useParams();
  
  
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
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar Usuario"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Buscar</Button>
      </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
