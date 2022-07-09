//IMPORTACIONES
import { Container,Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {React} from 'react';

export default function BarraGraficas({MostrarPanelIzquierdo}) {
  

  
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
    <Container >
 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">

          <NavLink to={`/Dashboard/GraficaBarra/${MostrarPanelIzquierdo=="perfilUsuario" ? `${MostrarPanelIzquierdo}#${window.location.href.split('#')[1]}` : MostrarPanelIzquierdo}`} className='nav-link'>Cantidad Usuarios</NavLink>
          <NavLink to={`/Dashboard/GraficaLineal/${MostrarPanelIzquierdo=="perfilUsuario" ? `${MostrarPanelIzquierdo}#${window.location.href.split('#')[1]}` : MostrarPanelIzquierdo}`} className='nav-link'>Aumento Por Mes</NavLink>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
