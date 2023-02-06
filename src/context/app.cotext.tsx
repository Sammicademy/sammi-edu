import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { PageCategory } from '../interfaces/page.interface';

export interface IAppContext {
	menu: MenuItem[];
	firstCategory: PageCategory;
	setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: PageCategory.Courses });

export const AppContextProvider = ({ firstCategory, menu, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	const [menuState, setMenuState] = useState<MenuItem[]>(menu);

	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};

	useEffect(() => {
		setMenu(menu);
	}, [menu]);

	return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>{children}</AppContext.Provider>;
};
