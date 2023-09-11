export interface HomepageCategory {
	id: string,
	name: string,
	displayOrder: number,
	services: HomepageService[],
}

export interface HomepageService {
	id: string,
	slug: string,
	pluralName: string,
	singularName: string,
	icon: string,
	businessCount: number,
}