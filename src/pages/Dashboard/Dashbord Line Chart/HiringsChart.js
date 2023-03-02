import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

function HiringsChart() {
    const labels = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            label: "This Week",
            data: [150, 200, 210, 250, 200, 270, 230],
            fill: false,
            borderColor: '#00629E',
            color:"#8895A4",
            tension: 0.2,
            borderWidth: 3,
            // pointRadius:0,
            // pointHoverRadius:0,
          },
          {
            label: "Previous Week",
            data: [200, 300, 310, 450, 300, 470, 330],
            fill: false,
            borderColor: '#CED6DE',
            color:"#8895A4",
            tension: 0.2,
            borderWidth: 3,
            // pointRadius:0,
            // pointHoverRadius:0,
          }
        ],
    
    
      };
    
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            align: "center",
            display: true,
            color:"#8895A4",
            position: 'top',
            padding: {
              buttom: 20
            },
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
          title: {
            display: true,
            align: "start",
            text: 'Hirings ',
            color: '#474647',
            font: {
              size: 18,
              family: 'Lato',
              weight: '600',
              style: 'italic'
            },
            padding: {
              top: 20,
              left:12,
            },
          },
        },
        // Modify the axis by adding scales
        scales: {
          // to remove the labels
          x: {
            // ticks: {
            //   display: false,
            // },
            // to remove the x-axis grid
            grid: {
              drawBorder: false,
              display: true,
            },
          },
          // to remove the y-axis labels
          y: {
            ticks: {
              display: true,
              beginAtZero: true,
            },
            // to remove the y-axis grid
            grid: {
              drawBorder: false,
              display: false,
            },
          },
        },
    
      };
  return (
    <>
         <div className="">
        <Line data={data} options={options} />
      </div>
    </>
  )
}

export default HiringsChart;