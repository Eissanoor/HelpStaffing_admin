import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from 'chart.js';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

function DashbordLine() {
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
        datasets: [{
          label: `Escrow Amount `,
          data: [10, 20, 30, 25, 20,30, 40],
          // fill: false,
          borderColor: '#FFFFFF',
          tension: 0.2,
          borderWidth:3,
          pointRadius:0,
        }]
      };
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "$27.486",
            color:"#FFFFFF",
            algin:"start",
            font:{
              size:21,
            }
          },
        },
        // Modify the axis by adding scales
        scales: {
          // to remove the labels
          x: {
            ticks: {
              display: false,
            },
            // to remove the x-axis grid
            grid: {
              drawBorder: false,
              display: false,
            },
          },
          // to remove the y-axis labels
          y: {
            ticks: {
              display: false,
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
    <div>
        <Line data={data} options={options}/>
    </div>
  )
}

export default DashbordLine