import { PageCategory, PageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

export interface CoursePageComponentProps {
	firstCategory: PageCategory;
	page: PageModel;
	products: ProductModel[];
}
