import { ReviewFormProps } from './reivew-form.props';
import styles from './reivew-form.module.css';
import cn from 'classnames';
import Input from '../input/input';
import Rating from '../rating/rating';
import { Button, TextArea } from '..';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm, IReviewResponse } from './review-form.interface';
import axios from 'axios';
import { useState } from 'react';
import CloseIcon from './close.svg';
import Success from './success';
import Error from './error';

const ReivewForm = ({ productid, className, ...props }: ReviewFormProps): JSX.Element => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<IReviewForm>();

	const onSubmit = async (formData: IReviewForm) => {
		setError(false);
		setIsSuccess(false);
		try {
			const { status } = await axios.post<IReviewResponse>(`${process.env.NEXT_PUBLIC_API}/posts`, {
				...formData,
				productId: productid,
			});
			if (status === 201) {
				setIsSuccess(true);
				reset();
			}
		} catch {
			setError(true);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input
					placeholder='Name'
					className={styles.name}
					error={errors.name}
					{...register('name', { required: { value: true, message: 'Name is required' } })}
				/>
				<Input
					placeholder='Title'
					className={styles.title}
					error={errors.title}
					{...register('title', { required: { value: true, message: 'Title is required' } })}
				/>
				<div className={styles.rating}>
					<span>Rating: </span>
					<Controller
						control={control}
						name={'rating'}
						rules={{ required: { value: true, message: 'Rating is required' } }}
						render={({ field }) => (
							<Rating isEditabled rating={field.value} error={errors.rating} ref={field.ref} setRating={field.onChange} />
						)}
					/>
				</div>
				<TextArea
					placeholder='Description'
					className={styles.description}
					error={errors.description}
					{...register('description', { required: { value: true, message: 'Description is required' } })}
				/>
				<div className={styles.submit}>
					<Button appearance='primary'>Submit</Button>
					<span className={styles.info}>* Your review will be moderated and reviewed before being published.</span>
				</div>
			</div>

			{isSuccess && <Success setIsSuccess={setIsSuccess} />}

			{error && <Error setError={setError} />}
		</form>
	);
};

export default ReivewForm;
