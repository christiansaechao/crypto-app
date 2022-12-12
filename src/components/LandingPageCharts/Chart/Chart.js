import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip,
    Filler,
    Legend
  } from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
LineElement,
PointElement,
Tooltip,
Filler,
Legend
);

const Chart = ({type, chartsData}) => {
  return (
    <>
    {type === 'bar' ? 
        <Bar
            data={{
            labels: chartsData.prices.map((date) => {
                return new Date(date[0]).getDate();
            }),
            datasets: [
                {
                    data: chartsData.prices.map((price) => {
                        return parseInt(price[1].toFixed(2));
                    }),
                    backgroundColor:  '#2172E5',
                    borderColor: '#A7A7A9',
                    borderWidth: '2',
                    borderRadius: '2',
                },
            ],
            }}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                tooltip: {
                    enabled: true,
                    callbacks:{
                        title: function(context){
                            let newLabel = chartsData.prices[context[0].dataIndex]; 
                            newLabel = new Date(newLabel[0]).toLocaleDateString("en-US");
                            return newLabel;
                        }
                    }
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
                    display: true,
                    grid: {
                    display: false,
                    drawBorder: false,
                    },
                },
                },
            }}
        /> :
        <Line
            data={{
                labels: chartsData.total_volumes.map((date) => {
                return new Date(date[0]).getDate();
                }),
                datasets: [
                {
                    label: 'Volume',
                    data: chartsData.total_volumes.map((volume) => {
                    return parseInt(volume[1].toFixed(2));
                    }),
                    borderColor: '#4688E4',
                    backgroundColor: '#4688E4',
                    borderWidth: '4',
                    pointRadius: 2,
                },
                {
                    label: 'Price',
                    data: chartsData.prices.map((price) => {
                        return parseInt(price[1].toFixed(2));
                    }),
                    backgroundColor:  '#FFAF2C',
                    borderColor: '#FFAF2C',
                    borderWidth: '4',
                    pointRadius: 2,
                }
                ],
            }}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                      },
                    tooltip: {
                        enabled: true,
                        callbacks:{
                            title: function(context){
                                let newLabel = chartsData.prices[context[0].dataIndex]; 
                                newLabel = new Date(newLabel[0]).toLocaleDateString("en-US");
                                return newLabel;
                            }
                        }
                    }
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
        }
    </>
  )
}

export default Chart; 