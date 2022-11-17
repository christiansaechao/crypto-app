import React, { Component } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip);

export class LandingPageCharts extends Component {
  render() {
    const { chartsData } = this.props;
    console.log(chartsData); 
    return (
      <>
        {chartsData && (
          <Bar
            data={{
              labels: this.props.chartsData.prices.map((date) => {
                return new Date(date[0]).getDate();
              }),
              datasets: [
                {
                  data: this.props.chartsData.prices.map((price) => {
                    return parseInt(price[1].toFixed(2));
                  }),
                  backgroundColor: "red",
                },
              ],
            }}
          />
        )}

        {chartsData && (
          <Line
            data={{
              labels: this.props.chartsData.total_volumes.map((date) => {
                return new Date(date[0]).getDate();
              }),
              datasets: [
                {
                  data: this.props.chartsData.total_volumes.map((volume) => {
                    return parseInt(volume[1].toFixed(2));
                  }),
                  backgroundColor: "red",
                  borderColor: 'red'
                },
              ],
            }}
          />
        )}
      </>
    );
  }
}

export default LandingPageCharts;
