import Link from 'next/link';
import styles from './navbar.module.css';
import Logo from '../logo.svg';
import { navLinks } from '../../helpers/constants';
import { IconButton, Search, Text } from '../../components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffnes: 20,
			},
		},
		closed: {
			opacity: 0,
			x: '100%',
		},
	};

	const toggleOpen = () => setIsOpen(prev => !prev);

	return (
		<div className={styles.navbar}>
			<nav className={styles.nav}>
				<Link href={'/'}>
					<Logo className={styles.logo} />
				</Link>
				<div className={styles.navigation}>
					{navLinks.map((nav, idx) => (
						<Link href={nav.route} key={idx}>
							<Text className={styles.navTitle}>{nav.name}</Text>
						</Link>
					))}
					<Search />
				</div>
				<IconButton onClick={toggleOpen} icon={isOpen ? 'close' : 'menu'} appearance='white' className={styles.mobileIcon} />
				<motion.div variants={variants} initial={'closed'} animate={isOpen ? 'opened' : 'closed'} className={styles.mobileMenu}>
					{navLinks.map((nav, idx) => (
						<Link href={nav.route} key={idx} className={styles.navLink}>
							<Text>{nav.name}</Text>
						</Link>
					))}
					<Search className={styles.search} />
				</motion.div>
			</nav>
		</div>
	);
};

export default Navbar;
