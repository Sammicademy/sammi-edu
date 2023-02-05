import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextArea } from '..';

export default {
	name: 'TextArea',
	component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args} />;

export const TextField = Template.bind({});
TextField.args = {
	placeholder: 'Placeholder',
};

export const ErrorField = Template.bind({});
ErrorField.args = {
	placeholder: 'Placeholder',
	error: { message: 'Field is reuired' },
};
