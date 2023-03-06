import { ComponentStory, ComponentMeta } from '@storybook/react';
import StyledArrowDiv from '../../../Assets/Components/StyledArrowDiv';

export default {
  title: 'Pokemon/StyledArrow',
  component: StyledArrowDiv,
} as ComponentMeta<typeof StyledArrowDiv>;

// ************ ************ ************ //
// ************ DEFINE TEMPLATES ************ //
const Template: ComponentStory<typeof StyledArrowDiv> = (args) => (
  <StyledArrowDiv {...args} />
);

// ************ ************ ************ //
// ************ TEMPLATES CONFIG ************ //

const label = 'StyledArrow';

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label,
};
