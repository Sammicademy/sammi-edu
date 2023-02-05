import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './input';

export default {
	name: 'Input',
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const TextField = Template.bind({});
TextField.args = {
	placeholder: 'Placeholder',
};

export const ErrorField = Template.bind({});
ErrorField.args = {
	placeholder: 'Placeholder',
	error: { message: 'Field is reuired' },
};
