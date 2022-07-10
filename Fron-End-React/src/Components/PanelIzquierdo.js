//IMPORTACIONES
import BarraGraficas from './NavBars.js/BarraGraficas';
import { useParams } from 'react-router-dom';
import { Col} from 'react-bootstrap';
import React from 'react';

export default function PanelIzquierdo({children}) {
  
  //DESESTRUCTURANDO EL OBJETO USEPARAMS
  const {tipoGrafica,MostrarPanelIzquierdo}=useParams();



  return (
    <Col className='bg-dark me-5 rounded tm p-3' >
         
        <BarraGraficas MostrarPanelIzquierdo={MostrarPanelIzquierdo}/>

        {children}

      </Col>
  )
}
