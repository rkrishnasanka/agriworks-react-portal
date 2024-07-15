import type { Meta, StoryObj } from "@storybook/react";
import LoadingIndicator from './LoadingIndicator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta  = {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
  tags: ['autodocs'],
} as Meta<typeof LoadingIndicator>;

export default meta;

// Use the LoadingIndicatorProps interface for args if you will have props in the future
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
  },
};

