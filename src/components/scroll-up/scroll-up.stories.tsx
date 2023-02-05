import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading from '../heading/heading';
import ScrollUp from './scroll-up';

export default {
	name: 'ScrollUp',
	component: ScrollUp,
} as ComponentMeta<typeof ScrollUp>;

export const Model: ComponentStory<typeof ScrollUp> = () => {
	return (
		<div style={{ height: '200vh' }}>
			<Heading tag='h1'>Scroll Down</Heading>
			<ScrollUp />
		</div>
	);
};
