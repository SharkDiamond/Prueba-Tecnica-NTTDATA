//IMPORTACIONES
import ActualizarUsuario from "./Formularios/ActualizarUsuario";
import EliminarUsuario from "./Formularios/EliminarUsuario";
import { useNavigate, useParams } from "react-router-dom";
import CrearUsuario from "./Formularios/CrearUsuario";
import GraficaDatos from "../Context/data-Graficas";
import { Container, Row } from "react-bootstrap";
import UsersTableList from "./usersTableList";
import PanelIzquierdo from './PanelIzquierdo';
import GraficaLineal from './GraficaLineal';
import PerfilUsuario from "./PerfilUsuario";
//IMPORTACIONES
import PanelDerecho from './PanelDerecho';
import GraficaBarra from './GraficaBarra';
import Barra from './NavBars.js/Barra';
import {React,useEffect} from 'react';

export default function DashboardPrincipal() {
  
  //OBTENIENDO LOS PARAMETROS DE LA URL
  const {tipoGrafica,MostrarPanelIzquierdo}=useParams();
  //CREANDO EL NAVEGADOR
  const navegador=useNavigate();
  //OBJETO DE COMPONENTES
  const componentes={

    GraficaLineal:<GraficaLineal/>,
    GraficaBarra:<GraficaBarra/>,
    usersTableList:<UsersTableList tableType='showUsers'/>,
    perfilUsuario:<PerfilUsuario/>,
    CreateUsersForm:<CrearUsuario/>,
    DeleteUsersForm:<EliminarUsuario/>,
    updateUserForm:<ActualizarUsuario/>
  };
  //CICLO DE VIDA DE MONTAJE
  useEffect(() => {
 
  //EN DADO CASO LA RUTA NO CONCUERDE CON ALGUNO DE LOS COMPONENTES
  if (!Object.keys(componentes).includes(tipoGrafica) || !Object.keys(componentes).includes(MostrarPanelIzquierdo)){

    navegador('/NOTFOUND');

  };

  }, []);

  return (
    <>

     <Barra/>

        <Container className='mt-5'>
        
            <Row className='mb-5'>
              <GraficaDatos>

                  <PanelIzquierdo>
                    {componentes[tipoGrafica]}
                  </PanelIzquierdo >

                  <PanelDerecho >
                    {componentes[MostrarPanelIzquierdo]}
                  </PanelDerecho >

              </GraficaDatos>
            </Row>

        </Container>

    </>
  )
}