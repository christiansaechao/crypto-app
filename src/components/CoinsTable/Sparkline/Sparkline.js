import React from "react";
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

const Sparkline = (props) => {
  const manipulatedData = [...props.coinData];
  const colorChange = () => {
    if(manipulatedData[0] < manipulatedData[manipulatedData.length - 1]){
      return 'green'
    } else {
      return 'red'; 
    }
  }

  return (
    <Line
      data={{
        labels: manipulatedData.map((_, index) => {
          return index + 1;
        }),
        datasets: [
          {
            data: manipulatedData.map((price) => {
              return price;
            }),
            backgroundColor: colorChange(),
            borderColor: colorChange(),
            tension: .1,
            radius: 0
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: false
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          x: {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
      }}
    />
  );
};

export default Sparkline;
