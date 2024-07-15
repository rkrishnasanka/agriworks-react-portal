// Imports
import { Meta, StoryObj } from "@storybook/react/types-6-0";
import Upload, { UploadProps } from './Upload';

// Component metadata
const meta: Meta = {
  title: 'Components/Upload',
  component: Upload,
  tags: ['autodocs'],
};

export default meta;

// Default story
const Template: StoryObj<UploadProps> = (args) => <Upload {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
