

import { Container,Navbar,Nav } from 'react-bootstrap';
import React from 'react';

export default function BarraGraficas({changeGrafica}) {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
    <Container >
 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">
          <Nav.Link href="#Create" onClick={e=>changeGrafica('Bar')}>Cantidad Usuarios</Nav.Link>
          <Nav.Link href="#Delete" onClick={e=>changeGrafica('Lineal')}>Aumento Por Mes</Nav.Link>
       
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
