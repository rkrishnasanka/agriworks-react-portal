import type { Meta, StoryObj } from "@storybook/react";
import DataTable from './DataTable';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
} as Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary :Story = {
  args: {
  headers: ['Name', 'Age', 'Location'],
  data: [
    { id: 1, Name: 'John Doe', Age: 25, Location: 'New York' },
    { id: 2, Name: 'Jane Doe', Age: 22, Location: 'Chicago' },
  ],
  isLoading: false
  },
};
