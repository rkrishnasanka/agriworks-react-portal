import type { Meta, StoryObj } from "@storybook/react";
import BarChart from './BarChart';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta = {
    title: 'Components/BarChart',
    component: BarChart,
    parameters: {
        backgrounds: { default: 'white' },
        statusBar: { hidden: true },
        layout: 'fullscreen',
    },
};

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof BarChart>;

// More on adding stories: https://storybook.js.org/docs/react/writing-stories/introduction#adding-stories
export const Primary : Story = {
args: {
    chartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1
            }
        ]
    }
},
};
