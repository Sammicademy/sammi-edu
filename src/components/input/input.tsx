import styles from './input.module.css';
import cn from 'classnames';
import { InputProps } from './input.props';

const Input = ({ className, ...props }: InputProps): JSX.Element => {
	return <input className={cn(styles.input, className)} {...props} />;
};

export default Input;
