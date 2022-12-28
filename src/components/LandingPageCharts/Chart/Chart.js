import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Filler,
  Legend
);

const Chart = (props) => {
  const getDates = () => {
    return props.chartsData.total_volumes.map((entry) => {
      return new Date(entry[0]).getDate();
    });
  };

  const getVolumesData = () => {
    return props.chartsData.total_volumes.map((volume) => {
      return parseInt(volume[1].toFixed(2));
    })
  }
  return (
    <Line
      data={{
        labels: getDates(),
        datasets: [
          {
            label: "Volume",
            data: getVolumesData(),
            borderColor: "#4688E4",
            backgroundColor: "#4688E4",
            borderWidth: "4",
            pointRadius: 2,
          },
          {
            label: "Price",
            data: props.chartsData.prices.map((price) => {
              return parseInt(price[1].toFixed(2));
            }),
            backgroundColor: "#FFAF2C",
            borderColor: "#FFAF2C",
            borderWidth: "4",
            pointRadius: 2,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            enabled: true,
            callbacks: {
              title: function (context) {
                let newLabel = props.chartsData.prices[context[0].dataIndex];
                newLabel = new Date(newLabel[0]).toLocaleDateString("en-US");
                return newLabel;
              },
            },
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawBorder: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: true,
              drawBorder: false,
            },
          },
        },
      }}
    />
  );
};

export default Chart;
