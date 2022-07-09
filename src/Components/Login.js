//IMPORTACIONES
import {Row,Col,Form,FormControl,FormGroup,Button} from "react-bootstrap";
import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../App.css';


export default function Login() {

    //ESTADO PARA EL USUARIO Y EL PASSWORD
    const [formData,setFormData]=useState({username:"",password:""});
    //REFERENCIA PARA EL BOTON DE ENVIAR DEL LOGIN
    const BotonEnviarDatos=useRef();
    //NAVEGADOR PARA REDIRIGIR AL USUARIO
    const navegador=useNavigate();

    //FUNCION PARA ENVIAR LOS DATOS DE INICIO DE SESION
    const handleSubmit=async(e) => {

        e.preventDefault();

        try {
           
            //DESABILITANDO EL BOTON DE ENTRAR
            BotonEnviarDatos.current.disabled=true;
           //HACIENDO LA PETICION HACIA EL SERVIDOR PARA VALIDAR EL USUARIO
           const sendDataUser= await axios.post('https://backapposwa.osnetpr.net/Session/validate',{});
           //GUARDANDO EN EL SESSION STORAGE EL TOKEN
           sessionStorage.setItem('token','asdasd');
           //NAVEGANDO HACIA EL DASHBOARD PRINCIPAL
           navegador('Dashboard');

        } catch (error) {

            //DESABILITANDO EL BOTON DE ENTRAR
            BotonEnviarDatos.current.disabled=false;
            //IMPRIMIENDO EL ERROR EN CONSOLA
            console.log(error.message);
        
        }

     }

  return (
    <Row className="align-items-center justify-content-center p-3 containerPrincial">
        <Col className="border rounded text-center p-5 barra bg-dark" lg={4}>
            <h1 className="mb-4 fw-bold text-white">Users Managers</h1>

                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-center">

                        <Col xl={6}>
                            <FormGroup>

                                <FormControl
                                required
                                placeholder="User"
                                name="Usuario"
                                value={formData.username}
                                onChange={(e) => setFormData(e.target.value)}
                                type="text"
                                />

                                <br/>

                                <FormControl
                                required
                                placeholder="Password"
                                name="Password"
                                value={formData.password}
                                onChange={(e) => setFormData(e.target.value)}
                                type="Password"
                                />

                                <br/>
                                <Button type="submit" variant="outline-success" disabled={false} ref={BotonEnviarDatos}>Entrar</Button>

                            </FormGroup>
                    </Col>

                </Row>
            </Form>
        </Col>

    
  </Row>
  )
}