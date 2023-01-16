import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Filler
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
    });
  };

  const getPrices = () => {
    return props.chartsData.prices.map((price) => {
      return price[1];
    })
  }

  const chartType = (type) => {
    switch (type) {
      case "volume":
        const volumeSettings = {
          label: "Volume",
          data: getVolumesData(),
          borderColor: "#4688E4",
          backgroundColor: "#4688E4",
          borderWidth: "2",
          pointRadius: .5,
        };
        return volumeSettings;
      case "price":
        const priceSetting = {
          label: "Price",
          data: getPrices(),
          backgroundColor: "#FFAF2C",
          borderColor: "#FFAF2C",
          borderWidth: "2",
          pointRadius: .5,
        };
        return priceSetting;
      default:
        return null;
    }
  };

  return (
    <Line
      data={{
        labels: getDates(),
        datasets: [chartType(props.chartType)]
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
