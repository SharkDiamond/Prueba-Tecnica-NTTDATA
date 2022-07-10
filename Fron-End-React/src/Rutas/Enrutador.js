//IMPORTACIONES
import DashboardPrincipal from '../Components/DashboardPrincipal';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import RutasPrivadas from './Rutas-Privadas';
import Login from '../Components/Login';
import React from 'react';
import NotFound from '../Components/NoFound';


export default function Enrutador() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard/:tipoGrafica/:MostrarPanelIzquierdo' element={<RutasPrivadas><DashboardPrincipal/></RutasPrivadas>}/>
      <Route path='/NOTFOUND' element={<NotFound/>}/>
      <Route path='*' element={<NotFound/>}/>
    
    </Routes>
  </BrowserRouter>
  )
}
