import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AdvatnageData } from '../../interfaces/page.interface';
import Advantages from './advantages';

export default {
	name: 'Advantages',
	component: Advantages,
} as ComponentMeta<typeof Advantages>;

export const Advantage: ComponentStory<typeof Advantages> = ({ ...props }) => {
	const arr: AdvatnageData[] = [
		{
			title: 'ReactJS class component',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
			id: '1',
		},
		{
			title: 'VueJS directive',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
			id: '2',
		},
		{
			title: 'NextJS Server Side Rendering',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
			id: '3',
		},
		{
			title: 'SEO',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
			id: '4',
		},
	];

	return <Advantages advantages={arr} {...props} />;
};
