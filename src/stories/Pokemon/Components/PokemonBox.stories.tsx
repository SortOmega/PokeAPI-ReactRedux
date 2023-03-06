import { ComponentMeta, ComponentStory } from '@storybook/react';
import PokemonBox from '../../../Assets/Components/Pokemon/PokemonBox';

export default {
  title: 'Pokemon/PokemonBox',
  component: PokemonBox,
} as ComponentMeta<typeof PokemonBox>;

// ************ ************ ************ //
// ************ DEFINE TEMPLATES ************ //
const Template: ComponentStory<typeof PokemonBox> = (args) => (
  <PokemonBox {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  limitedSize: true,
};
