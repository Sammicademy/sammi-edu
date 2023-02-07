import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Search } from '..';

export default {
	name: 'Search',
	component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = args => <Search {...args} />;

export const Model = Template.bind({});
