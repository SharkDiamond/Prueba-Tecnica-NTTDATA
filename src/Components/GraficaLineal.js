//IMPORTACIONES
import {Chart as ChartJS,CategoryScale,LinearScale,Title,Tooltip,Legend,LineElement,PointElement} from "chart.js";
import { GraficasContext } from "../Context/data-Graficas";
import React, { useContext,useEffect } from 'react';
import { Line } from "react-chartjs-2";
import '../App.css';


export default function GraficaLineal() {
    
    //DESESTRUCTURANDO EL CONTEXTO DE GRAFICA DATOS
   const {dataLineal : data,getDataLineal}=useContext(GraficasContext);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      
    //CICLO DE VIDA DE MONTAJE     
    useEffect(() => {
    
    //OBTENIENDO LOS DATOS PARA LA GRAFICA
    getDataLineal();

    }, []);
  

     //OPCIONES DE LA GAFICA
     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
        
        },
     };
      
      //DATOS DE LA GRAFICA
      const dataGrafica = {
        labels:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets: [
          {
            label: 'Datos',
            data,
            borderColor: 'white',
            backgroundColor: 'white',
          }
        ],
      }

    return (
    <>

      <Line options={options} data={dataGrafica} />

    </>
  )
}
