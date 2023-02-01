export interface ProductModel {
	alias: string;
	title: string;
	_id: string;
	productId: string;
	category: string;
	price: number;
	credit: number;
	images: string;
	oldPrice: number;
	description: string;
	advantages: string;
	disadvantages: string;
	tags: string[];
	characteristics: Characteristic[];
	initialRating: number;
	reviews: ReviewModel[];
	reviewCount: number;
}

export interface Characteristic {
	name: string;
	value: string;
}

export interface ReviewModel {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	productId: string;
}
