import { ReactNode } from 'react';

export interface TagProps {
	size?: 's' | 'm';
	color?: 'red' | 'green' | 'primary';
	children: ReactNode;
}
