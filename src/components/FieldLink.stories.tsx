// Import essentials
import { Meta, StoryObj } from "@storybook/react";
import FieldLink from './FieldLink';

// Set up stories for this component
const meta: Meta = {
  title: 'Components/FieldLink',
  component: FieldLink,
  tags: ['autodocs'],
};

export default meta;


type Story = StoryObj<typeof meta>;

// Create a primary story for this component
export const Primary :Story = {
  // Define initial arguments here if any (for this case, there are no props to be initialized)
};
