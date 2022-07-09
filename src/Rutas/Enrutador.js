//IMPORTACIONES
import DashboardPrincipal from '../Components/DashboardPrincipal';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import RutasPrivadas from './Rutas-Privadas';
import Login from '../Components/Login';
import React from 'react';


export default function Enrutador() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard/:tipoGrafica/:panelIzquierdo' element={<RutasPrivadas><DashboardPrincipal/></RutasPrivadas>}/>
      <Route path='*' element={<h1 className='text-center text-danger'>404 Not Found</h1>}/>
    
    </Routes>
  </BrowserRouter>
  )
}
