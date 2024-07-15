import type { Meta, StoryObj } from "@storybook/react";
import LineChart from './LineChart';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/LineChart',
  component: LineChart,
  args: {
    chartdata: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sample Data',
          data: [12, 19, 3, 5, 2],
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    }
  },
} as Meta<typeof LineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary :Story = {
args : {
  chartData: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sample Data',
          data: [12, 19, 3, 5, 2],
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    }
  }
};
