//IMPORTACIONES
import {Col} from 'react-bootstrap';
import React from 'react';

export default function PanelDerecho({children}) {

  return (
    <Col className='bg-dark rounded p-3 '>
        {children}
    </Col>
  )
}
