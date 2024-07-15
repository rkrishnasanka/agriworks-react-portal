import { StoryObj , Meta } from '@storybook/react';
import SearchBar  from './SearchBar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
} as Meta<typeof SearchBar>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
  args: {
    msg: 'Example Message', // Set your initial values here

  },
};
