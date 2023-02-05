import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './text';

export default {
	name: 'Text',
	component: Text,
	argTypes: {
		size: {
			type: 'string',
			defaultValue: 'm',
			options: ['s', 'm', 'l'],
			control: {
				type: 'radio',
			},
		},
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Large = Template.bind({});
Large.args = {
	children: 'Text',
	size: 'l',
};

export const Medium = Template.bind({});
Medium.args = {
	children: 'Text',
	size: 'm',
};

export const Small = Template.bind({});
Small.args = {
	children: 'Text',
	size: 's',
};
