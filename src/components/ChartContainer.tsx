import React from 'react';
import LineChart from './charts/LineChart'
import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'

interface ChartContainerProps {
    chosenGraph: string;
    datacollection: any; // use appropriate type in your project, as per your data structure
}

export default function ChartContainer({ chosenGraph, datacollection }: ChartContainerProps) {

    // This function decides which chart component to render based on the 'chosenGraph' prop
    const renderChart = () => {
        if (chosenGraph === 'Pie') {
            return <PieChart chartData={datacollection} />
        }
        if (chosenGraph === 'Bar') {
            return <BarChart chartData={datacollection} />
        }
        if (chosenGraph === 'Line') {
            return <LineChart chartData={datacollection} />
        }
    };

    // Render the chosen chart within a div with class 'small'. This class will need to be defined in your css or imported from Tailwind CSS
    return (
        <div className="small">
            {renderChart()}
        </div>
    );
}
