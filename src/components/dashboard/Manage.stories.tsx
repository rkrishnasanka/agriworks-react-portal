import { Meta, StoryObj } from "@storybook/react";
import DatasetBrowserView, {DatasetBrowserViewProps} from './DatasetBrowserView';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/DatasetBrowserView',
  component: DatasetBrowserView,
} as Meta<typeof DatasetBrowserView>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mocked data
const mockedDatasets = [
  {
    id: '1',
    // add other properties 
  },
  {
    id: '2',
    // add other properties 
  },
  // Add other datasets
];

// Mocked fetchUserDatasets function
async function fetchUserDatasetsMock() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedDatasets);
    }, 2000);
  });
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    fetchUserDatasets: fetchUserDatasetsMock,
    userDatasets: mockedDatasets,
  },
};
