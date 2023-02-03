import { CoursePageComponentProps } from './course-page-component.props';
import styles from './course-page-component.module.css';
import { Advantages, Heading, HhData, Product, Sort, Tag, Text } from '../../components';

const CoursePageComponent = ({ page, products }: CoursePageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			{/* TITLE */}
			<div className={styles.title}>
				<Heading tag='h1'>{page.title}</Heading>
				<Sort />
			</div>

			{/* PRODUCTS */}
			<div>{products && products.map((c, idx) => <Product key={idx} product={c} />)}</div>

			{/* VACATIONS */}
			<div className={styles.hhTitle}>
				<Heading tag='h2'>Vacations - {page.category}</Heading>
				<Tag color='red' size='m'>
					hh.uz
				</Tag>
			</div>

			{/* HHDATA */}
			{page.hh && <HhData {...page.hh} />}

			{/* ADVANTAGES */}
			{page.advantages && page.advantages.length && (
				<>
					<Heading tag='h2'>Advantages</Heading>
					<Advantages advantages={page.advantages} />
				</>
			)}

			{/* DESCRIPTION */}
			<Text>{page.description}</Text>

			{/* SKILLS */}
			<Heading tag='h2'>Skills</Heading>
			{page.tags.length &&
				page.tags.map(t => (
					<Tag color='primary' key={t}>
						{t}
					</Tag>
				))}
		</div>
	);
};

export default CoursePageComponent;
