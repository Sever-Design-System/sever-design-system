import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { PlusIcon } from '../Icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  size: 'medium',
  appearance: 'primary',
};

export const WithLeftIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithLeftIcon.args = {
  label: 'Button',
  size: 'medium',
  appearance: 'primary',
  IconLeft: PlusIcon(),
};

export const WithRightIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithRightIcon.args = {
  label: 'Button',
  size: 'medium',
  appearance: 'primary',
  IconLeft: PlusIcon(),
};

export const Loading = Template.bind({});
WithRightIcon.args = {
  label: 'Button',
  size: 'medium',
  appearance: 'primary',
  isLoading: true,
};
