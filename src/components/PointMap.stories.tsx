import type { Meta, StoryObj } from "@storybook/react";
import PointMap from './PointMap';

const meta = {
  title: 'Components/PointMap',
  component: PointMap,
  parameters:{
    backgrounds: { default: 'light' },
  },
  argTypes: {
    data: {
      description: 'Array of data points with longitude, latitude, type and place properties',
    }
  }
} as Meta<typeof PointMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story ={
  args: {
  data: [
    { longitude: -118.808, latitude: 33.961, type: 'Location 1', place: 'Place 1' },
    { longitude: -118.71611, latitude: 34.09042, type: 'Location 2', place: 'Place 2' },
    // more data points...
  ]
}
};
