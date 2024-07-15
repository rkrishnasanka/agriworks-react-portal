import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import HeatMap from './HeatMap';

const meta: Meta = {
  title: 'Components/HeatMap',
  component: HeatMap,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object'
    },
    latCol: {
      control: 'text'
    },
    lonCol: {
      control: 'text'
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary :Story = {
  args: {
  data: [
    { lat: 20, lon: 78 },
    { lat: 30, lon: 100 },
    { lat: 40, lon: 110 },
    // more data here if needed for testing purposes
  ],
  latCol: 'lat',
  lonCol: 'lon',
}
};
