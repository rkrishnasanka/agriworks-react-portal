import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import AgriWatchViewCard from './AgriWatchViewCard';

const meta: Meta = {
  title: 'Components/AgriWatchViewCard',
  component: AgriWatchViewCard,
};

export default meta;

interface AgriWatchViewCardStoryProps {
    agriWatchView: {
        visualType: string;
        dataset: string;
        id: number;
    };
    manage: boolean;
}

type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args: {
        agriWatchView: {
            visualType: 'Visual Type',
            dataset: 'Dataset',
            id: 1,
        },
        manage: true,
    },
};
