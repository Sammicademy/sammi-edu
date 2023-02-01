import { PageCategory } from './page.interface';

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	isOpened?: boolean;
	pages: PageItem[];
}

export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface IFirstLevelMenu {
	route: string;
	name: string;
	icon: JSX.Element;
	id: PageCategory;
}
