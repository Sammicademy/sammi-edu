import { SidebarProps } from './header.props';

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return <div {...props}>Sidebar</div>;
};

export default Sidebar;
