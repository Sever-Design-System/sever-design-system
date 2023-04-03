import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from './Box';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Flex = Template.bind({});
Flex.args = {
  children: 'Flex container with centered items',
  display: 'flex',
  backgroundColor: 'red',
};
