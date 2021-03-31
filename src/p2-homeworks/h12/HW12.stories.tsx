import React from 'react';
import HW12 from './HW12';
import {Meta, Story} from '@storybook/react/types-6-0';
import {ReduxStoreProviderDecorator} from '../../stories/decorators/ReduxStoreProviderDecorator';

export default {
    title: 'Homeworks/HW12',
    component: HW12,
    decorators: [ReduxStoreProviderDecorator]
} as Meta

const Template: Story = (args) => <HW12 {...args}/>

export const HW12Example = Template.bind({});




