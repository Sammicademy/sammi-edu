import styles from './reivew-form.module.css';
import cn from 'classnames';
import CloseIcon from './close.svg';
import { SuccessProps } from './reivew-form.props';

const Success = ({ setIsSuccess }: SuccessProps): JSX.Element => {
	return (
		<div className={cn(styles.success, styles.panel)}>
			<div className={styles.successTitle}>Review sent successfully</div>
			<div>Thanks your review will published after testing</div>
			<CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
		</div>
	);
};

export default Success;
