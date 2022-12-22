import React, { useState, useEffect }from "react";
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
  const [prices, setPrices] = useState([]);

  useEffect (() => {
    props.coinData.splice(0, 7).map((price) => {
      setPrices(...prices, price);
    })
  }, []); 

  return (
    <Line
      data={{
        labels: ["", "", "", "", "", "", ""],
        datasets: [
          {
            data: props.coinData.splice(0, 7).map((price) => {
              return price;
            }),
            backgroundColor: "red",
            borderColor: "red",
            tension: .5,
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
