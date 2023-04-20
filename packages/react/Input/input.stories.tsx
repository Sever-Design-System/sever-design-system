import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Medium = Template.bind({});
Medium.args = {};
export const Disabled = Template.bind({});
Disabled.args = {
  value: 'Disabled Input',
  disabled: true,
};
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: 'Readonly Input',
  readonly: true,
};
