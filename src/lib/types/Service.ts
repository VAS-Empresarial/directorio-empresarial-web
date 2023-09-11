import type { Category } from './Category';

export interface Service {
	id: string,
	name: string,
	category: Category,
}
