import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	appearance: 'primary' | 'ghost' | 'failure' | 'success';
	size?: 's' | 'm' | 'l';
	arrow?: 'right' | 'down' | 'none';
}
