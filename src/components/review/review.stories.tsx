import { ComponentMeta, ComponentStory } from '@storybook/react';
import Review from './review';

export default {
	name: 'Review',
	component: Review,
} as ComponentMeta<typeof Review>;

export const Model: ComponentStory<typeof Review> = ({ ...args }) => {
	const reviews = {
		_id: '625da7d8fa53c43fb7e25e18',
		name: 'Omar',
		title: 'Greatfull course for beginner',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque culpa quae inventore vitae corrupti a cupiditate soluta illum incidunt eligendi!',
		rating: 3,
		productId: '60637a279e11fc8bb4346a63',
	};

	return <Review review={reviews} {...args} />;
};
