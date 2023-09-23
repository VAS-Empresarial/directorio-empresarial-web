import type { Category } from './Category';

export interface Service {
	id: string,
	pluralName: string,
	singularName: string,
	icon: string,
	category: Category,
}
