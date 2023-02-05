import { convertToUSD } from '../../helpers/helpers';
import Card from '../card/card';
import styles from './hh-data.module.css';
import { HhDataProps } from './hh-data.props';
import RateIcon from './rate.svg';

const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>All Vacations</div>
				<div className={styles.countValue}>{count}</div>
			</Card>

			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Junior</div>
					<div className={styles.salaryValue}>{convertToUSD(juniorSalary)}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>

				<div>
					<div className={styles.title}>Middle</div>
					<div className={styles.salaryValue}>{convertToUSD(middleSalary)}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon />
					</div>
				</div>

				<div>
					<div className={styles.title}>Senior</div>
					<div className={styles.salaryValue}>{convertToUSD(seniorSalary)}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};

export default HhData;
