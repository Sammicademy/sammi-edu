import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import Sort from './sort';
import { SortEnum } from './sort.props';

export default {
	name: 'Sort',
	component: Sort,
} as ComponentMeta<typeof Sort>;

const Template: ComponentStory<typeof Sort> = args => {
	const [sort, setSort] = useState<SortEnum>(SortEnum.Rating);

	return (
		<div style={{ width: 200 }}>
			<Sort sort={sort} setSort={setSort} {...args} />
		</div>
	);
};

export const Model = Template.bind({});
