import React from 'react';
import { ArrowDownOutlined } from '@ant-design/icons';

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
function BarChart1() {

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
        label: ["Current Week 170"],
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
        display: false,
        align: "start",
        text: 'Earnings ',
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
      subtitle: {
        display: false,
        align: "end",
        text: ['Since last week'],
        color: ' #8895A4',
        font: {
          size: 14,
          family: 'Lato',
          weight: '400',
          style: 'italic'
        },
        padding: {
          right: 10
        }
      }
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
      <div className="h-100">
        <div className='d-flex justify-content-between py-2'>
          <p className='Earnings fontfamilyRaleway fontstyle mt-1'>Earnings</p>
          <p className='sincelast fontfamilyRaleway fontstyle mt-1'><span className='ratescine me-2 my-auto fw-bold'><ArrowDownOutlined className='my-auto'/>16,21%</span>Since last week</p>
        </div>
        <Line data={data} options={options} />
      </div>
    </>
  )
}

export default BarChart1;