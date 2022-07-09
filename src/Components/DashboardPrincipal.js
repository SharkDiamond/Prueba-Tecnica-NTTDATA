//IMPORTACIONES
import { useNavigate, useParams } from "react-router-dom";
import GraficaDatos from "../Context/data-Graficas";
import { Container, Row } from "react-bootstrap";
import UsersTableList from "./usersTableList";
import PanelIzquierdo from './PanelIzquierdo';
import GraficaLineal from './GraficaLineal';
import PerfilUsuario from "./PerfilUsuario";
import PanelDerecho from './PanelDerecho';
import GraficaBarra from './GraficaBarra';
import Barra from './NavBars.js/Barra';
import {React,useEffect} from 'react';


export default function DashboardPrincipal() {
  

  const {tipoGrafica,MostrarPanelIzquierdo}=useParams();

  const navegador=useNavigate();

  const componentes={

    GraficaLineal:<GraficaLineal/>,
    GraficaBarra:<GraficaBarra/>,
    usersTableList:<UsersTableList/>,
    perfilUsuario:<PerfilUsuario/>

  };

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