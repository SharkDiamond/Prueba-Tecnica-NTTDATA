import { Container,Navbar,Nav,Form ,FormControl,Button} from 'react-bootstrap';
import React from 'react';

export default function Barra() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
    <Container >
 
      <Navbar.Brand href="#Dashboard" >Users Manage</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">
          <Nav.Link href="#Create">Create Users</Nav.Link>
          <Nav.Link href="#Delete">Delete Users</Nav.Link>
          <Nav.Link href="#Update">Actualizar Users</Nav.Link>
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
