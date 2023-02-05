import { ComponentMeta, ComponentStory } from '@storybook/react';
import Product from './product';

export default {
	name: 'Product',
	component: Product,
} as ComponentMeta<typeof Product>;

export const Model: ComponentStory<typeof Product> = ({ ...props }) => {
	const data = {
		alias: 'react-js',
		title: "ReactJS Course - 'From 0 To Hero",
		_id: 'reactjs_id',
		productId: '60637a279e11fc8bb4346a63',
		category: 'ReactJS',
		price: 500,
		credit: 20,
		images: 'https://media.graphassets.com/5EQ4Vs3RQiTkQOlthLwA',
		oldPrice: 700,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo ab tenetur est eaque ullam quis adipisci temporibus minima enim.',
		advantages: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam enim expedita error ipsam pariatur dolore.',
		disadvantages: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, rem.',
		tags: ['Web development', 'ReactJS', 'Redux', 'Sass Application'],
		characteristics: [
			{
				name: 'School',
				value: 'Skillbox',
			},
			{
				name: 'Access',
				value: 'Lifetime',
			},
			{
				name: 'Complexity',
				value: 'Beginner',
			},
			{
				name: 'Duration',
				value: '24 month',
			},
		],
		initialRating: 4.3,
		reviews: [
			{
				_id: '625da7d8fa53c43fb7e25e18',
				name: 'Omar',
				title: 'Greatfull course for beginner',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque culpa quae inventore vitae corrupti a cupiditate soluta illum incidunt eligendi!',
				rating: 3,
				productId: '60637a279e11fc8bb4346a63',
			},
			{
				_id: '60e36e4183c99b1d45969fe4',
				productId: '60637a279e11fc8bb4346a63',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque culpa quae inventore vitae corrupti a cupiditate soluta illum incidunt eligendi!',
				title: 'Recommend all developers!',
				name: 'Ali',
				rating: 5,
			},
		],
		reviewCount: 2,
	};
	return <Product product={data} {...props} />;
};
