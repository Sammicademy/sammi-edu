import { SearchProps } from './search.props';
import styles from './search.module.css';
import cn from 'classnames';
import Input from '../input/input';
import Button from '../button/button';
import SearchIcon from './search.svg';
import { ChangeEvent, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '../../context/app.cotext';
import { PageItem } from '../../interfaces/menu.interface';

const Saerch = ({ className, ...props }: SearchProps): JSX.Element => {
	const { menu } = useContext(AppContext);
	const [search, setSearch] = useState('');
	const [response, setResponse] = useState<PageItem[]>([]);

	const router = useRouter();

	const searchHandler = (id: string) => {
		router.push(`/${router.query?.type || 'courses'}/${id}`);
		setResponse([]);
		setSearch('');
	};

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const allPages = menu.map(c => c.pages).flat();
		const { value } = e.target;
		setSearch(value);
		const response = allPages.filter(c => c.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
		setResponse(response);
		if (value.length == 0) {
			setResponse([]);
		}
	};

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input placeholder='Search...' className={styles.input} value={search} onChange={changeHandler} />
			<Button appearance='primary' className={styles.button}>
				<SearchIcon />
			</Button>

			{response.length ? (
				<div className={styles.searchResponse}>
					{response.map(c => (
						<div onClick={() => searchHandler(c._id)} key={c._id}>
							{c.title}
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

export default Saerch;
