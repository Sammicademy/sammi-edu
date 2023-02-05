import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tag from './tag';

export default {
	name: 'Tag',
	component: Tag,
	argTypes: {
		color: {
			type: 'string',
			description: 'Button color style',
			defaultValue: 'primary',
			options: ['red', 'green', 'primary'],
			control: {
				type: 'select',
			},
		},
		size: {
			type: 'string',
			description: 'Button size',
			defaultValue: 'm',
			options: ['s', 'm'],
			control: {
				type: 'radio',
			},
		},
	},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Text',
	color: 'primary',
};

export const Red = Template.bind({});
Red.args = {
	children: 'Text',
	color: 'red',
};

export const Green = Template.bind({});
Green.args = {
	children: 'Text',
	color: 'green',
};

export const Small = Template.bind({});
Small.args = {
	children: 'Text',
	size: 's',
};

export const Medium = Template.bind({});
Medium.args = {
	children: 'Text',
	size: 'm',
};
