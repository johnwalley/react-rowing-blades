import Blade from './Blade';
import React from 'react';
import { clubs } from '../utils';

export default {
  title: 'Components/Blade',
  component: Blade,
  argTypes: {
    club: {
      control: {
        type: 'select',
        options: [
          ...clubs.cambridge,
          ...clubs.oxford,
          ...clubs.uk,
          ...clubs.international,
        ],
      },
    },
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 400,
        step: 10,
      },
    },
  },
};

const Template = (args) => <Blade {...args} />;

export const FixedWidth = Template.bind({});
FixedWidth.args = { club: 'emm', size: 200 };

export const Responsive = Template.bind({});
Responsive.args = { club: 'emm' };
