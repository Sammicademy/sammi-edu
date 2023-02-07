import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	productid: string;
}

export interface SuccessProps {
	setIsSuccess?: Dispatch<SetStateAction<boolean>>;
}

export interface ErrorProps {
	setError?: Dispatch<SetStateAction<boolean>>;
}
