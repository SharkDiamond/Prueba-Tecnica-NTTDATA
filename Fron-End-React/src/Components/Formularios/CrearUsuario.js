//IMPORTACIONES
import { GraficasContext } from '../../Context/data-Graficas';
import { useNavigate, useParams } from 'react-router-dom';
import {Form,Button,Row,Col} from 'react-bootstrap';
import {React, useContext, useState} from 'react';
import errorManage from '../../Helpers/errors';
import axios from 'axios';


export default function CrearUsuario() {
  
  //ESTADOS
  //PARA MANIPULAR LOS USUARIOS
  const [formData,setFormData]=useState({
    nombre:'',
    apellido:'',
    correo:'',
    direccionfisica:'',
    username:'',
    password:'',
    rol:'admin'
  });
  //CREANDO EL NAVEGADOR
  const navegador=useNavigate();
  //OBTENIENDO LOS METODOS PARA ACTUALIZAR LOS DATOS DE LA GRAFICA
  const {getDataBarra,getDataLineal}=useContext(GraficasContext);
  //OBTENIENDO LOS PARAMETROS DE LA URL
  const {tipoGrafica}=useParams();

  //MANEJAR LA SUBIDA DE INFORMACION
 const handleSubmit= async (e) => { 

      try {

        e.preventDefault();
        //CREANDO EL USUARIO
        const createUser= await axios.post(`http://localhost:3006/Users/createUser`,formData,{

        headers:{

          'access-token':sessionStorage.getItem('token')

        }

        });
        //EN DADO CASO ESTE LA GRAFICA DE BARRA PARA ACTUALIZARLA
        if (tipoGrafica==='GraficaBarra') await getDataBarra();
        //EN DADO CASO ESTE LA GRAFICA LINEAL PARA ACTUALIZARLA
        else if (tipoGrafica==='GraficaLineal') await getDataLineal();
        //INDICANDO QUE EL USUARIO FUE CREADO
        alert(createUser.data.msg);

      } catch (error) {

        errorManage(error,navegador);
      
      }


  }
 //PARA MANIPULAR LOS CAMBIOS DE LOS FORMULARIOS
 const handleFormChange=(e) => { 

      e.preventDefault();

      setFormData({...formData,[e.target.name]:e.target.value});

  }

  return (
    <div>

      <h4 className='text-white text-center fw-bold'>Crear Usuario</h4>
    <Form onSubmit={handleSubmit}>
    
    <Row>
    
    <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" name='nombre' onChange={e=>handleFormChange(e)} value={formData.nombre} required />

      </Form.Group>

      <Form.Group as={Col} className="mb-1" controlId="formBasicPassword">
        
        <Form.Label className='text-white fw-bold'>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Apellido" onChange={e=>handleFormChange(e)}  value={formData.apellido} name='apellido' required/>
      
      </Form.Group>

    </Row>
  
    <Row>

    <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='correo' value={formData.correo} onChange={e=>handleFormChange(e)} required/>

      </Form.Group>

      <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Direccion Fisica</Form.Label>
        <Form.Control type="text" placeholder="Direccion Fisica" name='direccionfisica' value={formData.direccionfisica} onChange={e=>handleFormChange(e)} required/>

      </Form.Group>

    </Row>

    <Row>
    <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Usuario" name='username' value={formData.username}  onChange={e=>handleFormChange(e)} required/>

      </Form.Group>

      <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" name='password'  value={formData.password} onChange={e=>handleFormChange(e)} required/>

      </Form.Group>

      <Form.Group as={Col} className="mb-1" controlId="formBasicEmail">
        
        <Form.Label className='text-white fw-bold'>Rol</Form.Label>
        <Form.Select name='rol' onChange={e=>handleFormChange(e)} value={formData.rol}>
          <option value="admin">admin</option>
          <option value="basico">basico</option>
          <option value="vendedor">vendedor</option>
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