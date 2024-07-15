import { Meta, StoryObj } from '@storybook/react';
import LineChart, { LineChartProps, DataItem, ChartDefaults } from './LineChart';

// Define a default set of props
const defaultProps: LineChartProps = {
  data: [
    { day: '01-01-2022', count: 100 },
    { day: '02-01-2022', count: 200 },
    // ...additional data items
  ],
  chartDefaults: {
    width: 800,
    height: 600,
    chartId: 'lineChart',
    title: 'Sample Line Chart',
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50,
    },
    gridOpacity: 0.1,
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<LineChartProps> = {
  title: 'Components/LineChart',
  component: LineChart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<LineChartProps>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: { ...defaultProps },
};
