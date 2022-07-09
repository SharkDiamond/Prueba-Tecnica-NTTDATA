//IMPORTACIONES
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from "chart.js";
import { Bar } from "react-chartjs-2";
import React from 'react';
import '../App.css';

export default function GraficaBarra() {
 
    ChartJS.register(

        CategoryScale,
    
        LinearScale,
    
        BarElement,
    
        Title,
    
        Tooltip,
    
        Legend
    
      );


    const data = {
        labels:['Administrador','Basico','Vendedor'],
          datasets: [
            {
              label:'Cantidad De Usuarios',
              data: [12,12,1],
              fill: false,
              backgroundColor:['white','white','white'],
              borderColor: 'rgba(22, 99, 132, 0.6)',
             
            },
          ],
        };
        
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
       <Bar data={data} options={options.options} />
    
    </div>
  )

}
