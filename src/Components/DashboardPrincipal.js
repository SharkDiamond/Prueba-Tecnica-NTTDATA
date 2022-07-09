//IMPORTACIONES
import { Container, Row } from "react-bootstrap";
import PanelIzquierdo from './PanelIzquierdo';
import PanelDerecho from './PanelDerecho';
import Barra from './NavBars.js/Barra';
import React from 'react';

export default function DashboardPrincipal() {
  
  return (
    <>

     <Barra/>

        <Container className='mt-5'>

            <Row className='mb-5'>
      
                <PanelIzquierdo/>

                <PanelDerecho/>

            </Row>

        </Container>

    </>
  )
}