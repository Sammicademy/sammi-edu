import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton from './icon-button';

export default {
	name: 'IconButton',
	component: IconButton,
	argTypes: {
		icon: {
			type: 'string',
			defaultValue: 'close',
			options: ['close', 'menu', 'up'],
			control: { type: 'radio' },
		},
		appearance: {
			type: 'string',
			defaultValue: 'primary',
			options: ['primary', 'white'],
			control: {
				type: 'radio',
			},
		},
	},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args} />;

export const MenuIcon = Template.bind({});
MenuIcon.args = {
	icon: 'menu',
	appearance: 'primary',
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
	icon: 'close',
	appearance: 'primary',
};

export const UpIcon = Template.bind({});
UpIcon.args = {
	icon: 'up',
	appearance: 'primary',
};
