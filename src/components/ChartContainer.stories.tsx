import { StoryObj , Meta } from '@storybook/react';
import ChartContainer from './ChartContainer';

const meta = {
  title: 'Components/ChartContainer',
  component: ChartContainer,
} as Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PieChartStory : Story = {
  args : {
  chosenGraph: 'Pie',
  datacollection: [ // your data here
    // Example: { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  ],
}
};

export const BarChartStory : Story = {
  args : {
  chosenGraph: 'Bar',
  datacollection: [ // your data here
    // Example: { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  ],
}
};

export const LineChartStory : Story = {
  args : {
  chosenGraph: 'Line',
  datacollection: [ // your data here
    // Example: { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  ],
}
};
