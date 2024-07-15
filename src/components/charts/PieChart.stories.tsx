import type { Meta, StoryObj } from "@storybook/react";
import PieChart from './PieChart';

const meta = {
  title: 'Components/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  argTypes: {
      chartdata: { control: 'object' }
  }
} as Meta<typeof PieChart>;

export default meta;

type Story = StoryObj<typeof meta>;

// Setup a default Story
export const Primary : Story = {
args : {
  chartData: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }
    ]
  }
}
};
