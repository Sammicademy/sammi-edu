export interface IReviewForm {
	name: string;
	title: string;
	description: string;
	rating: number;
}

export interface IReviewResponse {
	name: string;
	rating: number;
	description: string;
	title: string;
	id: number;
	productId: string;
}
