import { ReactNode } from 'react';

export interface HeadingProps {
	tag: 'h1' | 'h2' | 'h3';
	children: ReactNode;
}
