import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Link from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: '/default',
  children: 'Default Link',
};

export const Visited = Template.bind({});
Visited.args = {
  to: '/visited',
  children: 'Visited Link',
};
