//IMPORTACIONES
import {BrowserRouter,Route, Routes, Navigate} from 'react-router-dom';
import DashboardPrincipal from '../Components/DashboardPrincipal';
import NotFound from '../Components/NoFound';
import RutasPrivadas from './Rutas-Privadas';
import Login from '../Components/Login';
import React from 'react';


export default function Enrutador() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard/:tipoGrafica/:MostrarPanelIzquierdo' element={<RutasPrivadas><DashboardPrincipal/></RutasPrivadas>}/>
      <Route path='/NOTFOUND' element={<NotFound/>}/>
      <Route path='/' element={<Navigate replace to="/Login" />}/>
      <Route path='*' element={<NotFound/>}/>
    
    </Routes>
  </BrowserRouter>
  )
}
