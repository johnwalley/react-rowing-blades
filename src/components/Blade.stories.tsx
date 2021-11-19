import { Meta, Story } from "@storybook/react";
import { Blade, BladeProps } from "./Blade";
import { clubs } from "../utils";

export default {
  title: "Components/Blade",
  component: Blade,
  argTypes: {
    club: {
      type: "select",
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
} as Meta;

const Template: Story<BladeProps> = (args) => <Blade {...args} />;

export const FixedWidth = Template.bind({});
FixedWidth.args = { club: "emm", flip: false, size: 200 };

export const Responsive = Template.bind({});
Responsive.args = { club: "emm", flip: false };

export const Flipped = Template.bind({});
Flipped.args = { club: "emm", flip: true, size: 200 };
