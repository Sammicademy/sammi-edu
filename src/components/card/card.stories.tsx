import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './card';

export default {
	name: 'Card',
	component: Card,
	argTypes: {
		color: {
			type: 'string',
			defaultValue: 'primary',
			options: ['primary', 'white'],
			control: {
				type: 'select',
			},
		},
	},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Card',
	color: 'primary',
};

export const White = Template.bind({});
White.args = {
	children: 'Card',
	color: 'white',
};
