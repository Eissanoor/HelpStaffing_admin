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

function AnalyticsChart() {
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
            label: "Total earnings",
          data: [150, 200, 210, 250, 200, 270, 230],
          fill: false,
          borderColor: '#00629E',
          tension: 0.2,
          borderWidth:3,
          pointRadius:0,
          // pointHoverRadius:0,
    },
    {
        label: "Total Escrow Amount",
        data: [200, 300, 310, 450, 300, 470, 330],
            fill: false,
            borderColor: '#CED6DE',
            tension: 0.2,
            borderWidth:3,
            pointRadius:0,
        }
        ],
       
            
      };
     

      const options = {
        responsive: true,
  plugins: {
    legend: {
      align: "start",
      display:true,
      position: 'top',
      padding: 20,
      labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: true,
        align: "start",
        text: 'Earnings over time',
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
        <Line data={data} options={options}/>
        </>
    )
}

export default AnalyticsChart;