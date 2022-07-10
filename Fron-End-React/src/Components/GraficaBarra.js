//IMPORTACIONES
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from "chart.js";
import { GraficasContext } from "../Context/data-Graficas";
import React, { useContext,useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import '../App.css';

export default function GraficaBarra() {
  
  //DESESTRUCTURANDO EL CONTEXTO DE GRAFICA DATOS
  const {dataBarra : data,getDataBarra}=useContext(GraficasContext);

    ChartJS.register(

        CategoryScale,
    
        LinearScale,
    
        BarElement,
    
        Title,
    
        Tooltip,
    
        Legend
    
    );

  //CICLO DE VIDA DE MONTAJE     
  useEffect(() => {
    
    //OBTENIENDO LOS DATOS DE LA BARRA
    getDataBarra();

  }, []);
  
  
    //DATOS DE LA GRAFICA
    const dataGrafica = {
        labels:['Administrador','Basico','Vendedor'],
          datasets: [
            {
              label:'Cantidad De Usuarios',
              data,
              fill: false,
              backgroundColor:['white','white','white'],
              borderColor: 'rgba(22, 99, 132, 0.6)',
             
            },
          ],
    };
    //OPCIONES DE LA GAFICA
    const options = {
         
          options:{
            responsives: true,
            scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },

          }
    };
 
    return (
    <div className='bg-dark'>
       <Bar data={dataGrafica} options={options.options} />
    </div>
  )

}
