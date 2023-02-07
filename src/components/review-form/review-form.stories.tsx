import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Heading, ReviewForm } from '..';
import Error from './error';
import Success from './success';

export default {
	name: 'ReviewForm',
	component: ReviewForm,
} as ComponentMeta<typeof ReviewForm>;

const Template: ComponentStory<typeof ReviewForm> = args => <ReviewForm {...args} />;

export const Form = Template.bind({});
Form.args = {
	productid: '00',
};

export const SuccessMessage: ComponentStory<typeof Success> = ({ ...args }) => {
	const [isSuccess, setIsSuccess] = useState<boolean>(true);

	return isSuccess ? <Success setIsSuccess={setIsSuccess} {...args} /> : <Heading tag='h1'>No message</Heading>;
};

export const ErrorMessage: ComponentStory<typeof Error> = ({ ...args }) => {
	const [isErrro, setError] = useState<boolean>(true);

	return isErrro ? <Error setError={setError} {...args} /> : <Heading tag='h1'>No message</Heading>;
};
