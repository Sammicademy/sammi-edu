import Menu from '../menu/menu';
import { SidebarProps } from './header.props';

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};

export default Sidebar;
