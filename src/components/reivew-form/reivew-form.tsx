import { ReviewFormProps } from './reivew-form.props';
import styles from './reivew-form.module.css';
import cn from 'classnames';
import Input from '../input/input';
import Rating from '../rating/rating';
import { useState } from 'react';
import { Button, TextArea } from '..';

const ReivewForm = ({ productid, className, ...props }: ReviewFormProps): JSX.Element => {
	const [rating, setRating] = useState<number>(0);

	return (
		<div className={cn(styles.reviewForm, className)} {...props}>
			<Input placeholder='Name' className={styles.name} />
			<Input placeholder='Title' className={styles.title} />
			<div className={styles.rating}>
				<span>Rating: </span>
				<Rating isEditabled rating={rating} setRating={setRating} />
			</div>
			<TextArea placeholder='Description' className={styles.description} />
			<div className={styles.submit}>
				<Button appearance='primary'>Submit</Button>
				<span className={styles.info}>* Your review will be moderated and reviewed before being published.</span>
			</div>
		</div>
	);
};

export default ReivewForm;
