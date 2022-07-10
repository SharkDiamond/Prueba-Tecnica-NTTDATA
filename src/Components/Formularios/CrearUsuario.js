import {React,useEffect} from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';
export default function CrearUsuario() {
  

  return (
    <div >

      <h4 className='text-white text-center fw-bold'>Crear Usuario</h4>
    <Form>
    <Row>
    
    <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />

      </Form.Group>

      <Form.Group as={Col} className="mb-1" controlId="formBasicPassword">
        
        <Form.Label className='text-white fw-bold'>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Apellido" />
      
      </Form.Group>

    </Row>
  
    <Row>

    <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Direccion Fisica</Form.Label>
        <Form.Control type="text" placeholder="Direccion Fisica" />

      </Form.Group>

    </Row>

    <Row>
    <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Usuario" />

      </Form.Group>

      <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />

      </Form.Group>

      <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Rol</Form.Label>
        <Form.Select >
          <option value="1">admin</option>
          <option value="2">basico</option>
          <option value="3">vendedor</option>
    </Form.Select>
      </Form.Group>

    </Row>


      <Button  type="submit" variant="outline-light mt-2">
        Crear Usuario
      </Button>


    </Form>
    </div>
  )
}
