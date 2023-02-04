import styles from './scroll-up.module.css';
import UpIcon from './up.svg';
import { motion } from 'framer-motion';
import { useScrollY } from '../../hooks/useScrollY';

const ScrollUp = () => {
	const scrollY = useScrollY();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		scrollY > 150 && (
			<motion.button
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
				exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
				whileHover={{
					scale: 1.2,
					transition: { duration: 0.2 },
				}}
				className={styles.scrollUp}
				onClick={scrollToTop}
			>
				<UpIcon />
			</motion.button>
		)
	);
};

export default ScrollUp;
