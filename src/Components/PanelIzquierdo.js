import { Col} from 'react-bootstrap';
import React, { useState } from 'react';
import BarraGraficas from './NavBars.js/BarraGraficas'
import GraficaBarra from './GraficaBarra'
import GraficaLineal from './GraficaLineal';

export default function PanelIzquierdo() {
  

   //ESTADO PARA MANEJAR EL CAMBIO DE GRAFICA
  const [graficaShow,setGraficaShow]=  useState('Bar');
  
  return (
    <Col className='bg-dark me-5 rounded tm p-3' >
         
        <BarraGraficas changeGrafica={setGraficaShow}/>

        {graficaShow ==='Bar' ? <GraficaBarra/> : <GraficaLineal/>}

      </Col>
  )
}
