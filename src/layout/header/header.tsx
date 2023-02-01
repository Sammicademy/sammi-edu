import { HeaderProps } from './header.props';

const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return <div {...props}>Header</div>;
};

export default Header;
