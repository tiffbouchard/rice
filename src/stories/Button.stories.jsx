import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  primary: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  primary: false
};

export const Round = Template.bind({});
Round.args = {
  label: 'Button',
  primary: true,
  size: 'medium',
  shape: 'roundest'
};

export const Shadow = Template.bind({});
Shadow.args = {
  label: 'Button',
  primary: true,
  size: 'medium',
  shape: 'default',
  shadow: true
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  primary: true,
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  primary: true,
  size: 'large',
};


