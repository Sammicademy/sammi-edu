import { ComponentMeta, ComponentStory } from '@storybook/react';
import HhData from './hh-data';

export default {
	name: 'Salary',
	component: HhData,
	argTypes: {
		juniorSalary: {
			type: 'number',
		},
		middleSalary: {
			type: 'number',
		},
		seniorSalary: {
			type: 'number',
		},
		count: {
			type: 'number',
		},
	},
} as ComponentMeta<typeof HhData>;

export const Data: ComponentStory<typeof HhData> = ({ ...props }) => {
	const data = {
		count: 1200,
		juniorSalary: 600,
		middleSalary: 1200,
		seniorSalary: 1800,
	};

	return <HhData {...data} {...props} />;
};
