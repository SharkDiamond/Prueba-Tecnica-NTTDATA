import React from 'react';
import {

    Chart as ChartJS,
  
    CategoryScale,
  
    LinearScale,
  
    Title,
  
    Tooltip,
  
    Legend,
    LineElement,
    PointElement
  
  } from "chart.js";
  import '../App.css';
  import { Line } from "react-chartjs-2";

export default function GraficaLineal() {
    
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
        
        },
      };
      
      const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Datos',
            data: [12,1,34,23,15,27,18,12,17,16,20,30],
            borderColor: 'white',
            backgroundColor: 'white',
          }
        ],
      }

    return (
    <>

<Line options={options} data={data} />

    </>
  )
}
