import type { Meta, StoryObj } from '@storybook/react';
import { Blade, BladeProps } from "./Blade";
import { clubs } from "../utils";

const meta: Meta<typeof Blade> = {
  title: "Components/Blade",
  component: Blade,
  argTypes: {
    club: {
      options: [
        ...clubs.cambridge,
        ...clubs.oxford,
        ...clubs.uk,
        ...clubs.international,
      ],
    },
    size: {
      control: {
        type: "range",
        min: 10,
        max: 400,
        step: 10,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Blade>;



export const FixedWidth :Story ={args: { club: "emm", flip: false, size: 200 }}

export const Responsive :Story ={args: { club: "emm", flip: false }}


export const Flipped :Story ={args: { club: "emm", flip: true, size: 200 }}

