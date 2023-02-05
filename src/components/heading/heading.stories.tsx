import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading from './heading';

export default {
	name: 'Heading',
	component: Heading,
	argTypes: {
		tag: {
			type: 'string',
			defaultValue: 'h1',
			options: ['h1', 'h2', 'h3'],
			control: {
				type: 'radio',
			},
		},
	},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
	tag: 'h1',
	children: 'Heading',
};

export const H2 = Template.bind({});
H2.args = {
	tag: 'h2',
	children: 'Heading',
};

export const H3 = Template.bind({});
H3.args = {
	tag: 'h3',
	children: 'Heading',
};
