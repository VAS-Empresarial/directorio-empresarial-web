import type { Image } from './Image';
import type { Service } from './Service';
import type { SocialMedia } from './SocialMedia';

export interface Business {
	id: string,
	name: string,
	logo: Image,
	image: Image,
	description: string,
	service: Service,
	socialMedia: Record<keyof typeof SocialMedia, string>,
}
