import React, {useState} from 'react';
import SuperRadio, {SuperRadioPropsType} from './SuperRadio';
import {Meta, Story} from '@storybook/react/types-6-0';
import {action} from '@storybook/addon-actions';

export default {
    title: 'CustomComponents/SuperRadio',
    component: SuperRadio,
    argTypes: {
        options: {defaultValue: ['first theme', 'second theme', 'third theme', 'fourth theme']},
        name: {defaultValue: 'radio'},
    }
} as Meta

const Template: Story = (args) => <SuperRadio {...args}/>;

export const SuperRadioWithFixedValue = Template.bind({});

SuperRadioWithFixedValue.args = {
    value: 'first theme',
    onChangeOption: action('Option was changed')
}

export const SuperRadioWithChangeValue: Story<SuperRadioPropsType> = (args) => {
    const [value, setValue] = useState<any>('first theme')
    return <SuperRadio {...args}
                       value={value}
                       onChangeOption={setValue}/>
}

