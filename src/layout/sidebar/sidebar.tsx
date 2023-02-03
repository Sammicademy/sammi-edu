import Menu from '../menu/menu';
import { SidebarProps } from './header.props';
import cn from 'classnames';
import styles from './sidebar.module.css';
import Link from 'next/link';
import Logo from '../logo.svg';
import { Divider, Search } from '../../components';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Link href={'/'}>
				<Logo />
				<Divider />
			</Link>
			<Search />
			<Menu />
		</div>
	);
};

export default Sidebar;
