import { FooterProps } from './footer.props';
import styles from './footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>Sammi © 2022 - {format(new Date(), 'yyyy')}. All right reserver</div>
			<a href='#'>Terms of use</a>
			<a href='#'>Privacy Policy</a>
		</footer>
	);
};

export default Footer;
