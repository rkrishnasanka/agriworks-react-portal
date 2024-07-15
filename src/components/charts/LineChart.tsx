import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

interface LineChartProps {
    chartData: object;
}

export default function LineChart({ chartData: chartdata }: LineChartProps) {

    // Define a reference to the DOM element where we will render the chart
    const chartRef = useRef(null);

    // Define chart options
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false
    };

    // Render the chart on component mount
    useEffect(() => {
        if(chartRef && chartRef.current) {
            const myChartRef = chartRef.current.getContext("2d");
            new Line(myChartRef, {
                data: chartdata,
                options: options
            });
        }
    }, [chartdata, options]);

    return (
        // using tailwind CSS to style the chart container
        <div className="w-full h-full">
            <canvas 
                id="myChart" 
                ref={chartRef} 
            />
        </div>
    );

}
