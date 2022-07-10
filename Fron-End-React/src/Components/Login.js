//IMPORTACIONES
import {Row,Col,Form,FormControl,FormGroup,Button} from "react-bootstrap";
import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import errorManage from "../Helpers/errors";
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
           const sendDataUser= await axios.post('http://localhost:3006/Users/validateUserSession',{username:formData.username,password:formData.password});
           //GUARDANDO EN EL SESSION STORAGE EL TOKEN
           sessionStorage.setItem('token',sendDataUser.data.token);
           //NAVEGANDO HACIA EL DASHBOARD PRINCIPAL
           navegador('/Dashboard/GraficaBarra/usersTableList');
           
        } catch (error) {

           errorManage(error);
           //DESABILITANDO EL BOTON DE ENTRAR
           BotonEnviarDatos.current.disabled=false;          
        
        }

    }

     const changeText=(e) => { 
      
        setFormData({...formData,[e.target.name]:e.target.value});

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
                                name="username"
                                value={formData.username}
                                onChange={changeText}
                                type="text"
                                />

                                <br/>

                                <FormControl
                                required
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={changeText}
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