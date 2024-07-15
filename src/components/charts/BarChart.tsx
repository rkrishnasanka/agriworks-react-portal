import React, { useEffect, useRef } from 'react';
import { Bar, Chart } from 'react-chartjs-2';

interface BarChartProps {
    chartData: any;
}

export default function BarChart(props: BarChartProps) {
    const chartReference = useRef<any>(null);

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

    // Use useEffect to replicate "mounted" lifecycle hook
    useEffect(() => {
        if (chartReference.current) {
            const myChartRef = chartReference.current.getContext("2d");
            new Chart(myChartRef, {
                type: "bar",
                data: props.chartData,
                options: options
            });
        }
    }, [props.chartData]);

    // Create HTML Canvas element for the chart
    return (
        <div className="w-full p-4">
            <canvas id="myChart" ref={chartReference} />
        </div>
    );
}
