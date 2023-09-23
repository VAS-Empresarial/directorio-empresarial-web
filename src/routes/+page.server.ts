import type { PageServerLoad } from './$types';
import { AxiosError } from 'axios';
import type { HomepageCategory } from '$lib/types/Homepage';
import api from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
	const homepageDataResponse = await api.get<HomepageCategory[]>('/homepage');

	if (homepageDataResponse instanceof AxiosError) {
		throw new Error(`Message: ${homepageDataResponse.message}`);
	}

	return { categories: homepageDataResponse.data };
};
