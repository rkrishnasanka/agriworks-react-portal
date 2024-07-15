import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import DatasetBrowserView from './DatasetBrowserView';
import { useStoreState, useStoreActions } from "../store";

jest.mock("../store", () => ({
  useStoreState: jest.fn(),
  useStoreActions: jest.fn()
}));

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DatasetBrowserView> = {
  title: 'Components/DatasetBrowserView',
  component: DatasetBrowserView,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DatasetBrowserView>;

// Mocked data
const mockedDatasets = [{
  id: 1,
  name: 'Dataset 1',
  // Any other field for a dataset
}];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = (args) => {
  useStoreState.mockReturnValueOnce(mockedDatasets);
  useStoreActions.mockReturnValueOnce(action('fetchDatasets triggered'));

  return <DatasetBrowserView {...args} />;
};

Primary.args = {
  // Under normal circumstances, args would be provided here, but DatasetBrowserView takes no props
};
