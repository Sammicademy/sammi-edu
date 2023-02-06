import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../../context/app.cotext';
import { firstLevelMenu } from '../../helpers/constants';
import styles from './menu.module.css';
import cn from 'classnames';
import { IFirstLevelMenu, PageItem } from '../../interfaces/menu.interface';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(AppContext);
	const router = useRouter();

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
		},
		hidden: {
			marginBottom: 0,
		},
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 30,
		},
		hidden: {
			opacity: 0,
			height: 0,
		},
	};

	const openSecondBLock = (category: string) => {
		setMenu &&
			setMenu(
				menu.map(c => {
					if (c._id.secondCategory === category) {
						c.isOpened = !c.isOpened;
					}

					return c;
				})
			);
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(c => {
					return (
						<div key={c.route}>
							<>
								<Link href={`/${c.route}/${menu[0].pages[0]._id}`}>
									<div
										className={cn(styles.firstLevel, {
											[styles.firstLevelActive]: c.id === firstCategory,
										})}
									>
										{c.icon}
										<span>{c.name}</span>
									</div>
								</Link>
								{c.id == firstCategory && buildSecondLevel(c)}
							</>
						</div>
					);
				})}
			</>
		);
	};

	const buildSecondLevel = (menuItem: IFirstLevelMenu) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(q => {
					if (q.pages.map(p => p._id).includes(router.asPath.split('/')[2])) {
						q.isOpened = true;
					}

					return (
						<div key={q._id.secondCategory}>
							<div className={styles.secondLevel} onClick={() => openSecondBLock(q._id.secondCategory)}>
								{q._id.secondCategory}
							</div>
							<motion.div
								variants={variants}
								layout
								initial={q.isOpened ? 'visible' : 'hidden'}
								animate={q.isOpened ? 'visible' : 'hidden'}
								className={cn(styles.secondLevelBlock)}
							>
								{buildThirdLevel(q.pages, menuItem.route)}
							</motion.div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], rotue: string) => {
		return pages.map(p => (
			<motion.div key={p._id} variants={variantsChildren}>
				<Link
					href={`/${rotue}/${p._id}`}
					className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${rotue}/${p._id}` === router.asPath,
					})}
				>
					{p.title}
				</Link>
			</motion.div>
		));
	};

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
