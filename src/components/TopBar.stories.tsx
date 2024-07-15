import { Meta, StoryObj } from "@storybook/react";
import TopBar from './TopBar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'Components/TopBar',
  component: TopBar,
  argTypes: {
    onSignIn: { action: 'signed in' },
  }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args:{
      onSignIn: (signedIn: boolean) => console.log(`User signed in: ${signedIn}`)
  }
}

