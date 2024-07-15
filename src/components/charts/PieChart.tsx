import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

interface PieChartProps {
    chartData: object;
}

export default function PieChart({ chartData }: PieChartProps) {

    const [options, setOptions] = useState({
        responsive: true,
        maintainAspectRatio: false
    });

    // As there's no equivalent lifecycle method for Vue's mounted in functional component, useEffect is used with an empty dependency list to simulate componentDidMount
    useEffect(() => {
        // In the place of the Vue's renderChart method, 
        // we would directly use the Pie from react-chartjs-2 in the return of our component passing in the data and options.
    }, []);

    return (
        // Replacing the Vue component with HTML elements and tailwind css classes
        <div className="flex">
            <Pie 
                data={chartdata}
                options={options} 
            />
        </div>
    );
}
