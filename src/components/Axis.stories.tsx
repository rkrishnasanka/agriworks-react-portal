import type { Meta, StoryObj } from "@storybook/react";
import Axis from './Axis';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'Components/Axis',
  component: Axis,
  argTypes: {
    scales: { action: 'scale method' },
    chartDefaults: { control: 'object' },
    trns: { control: 'text' },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story =  {
  args: {
    scales: () => console.log("Scale Method"),
    chartDefaults: {},
    data: [],
    trns: "translate(0,0)"
  },
};
