import type { PageServerLoad } from './$types';
import axios, { AxiosError } from 'axios';
import { PAYLOAD_BASE_URL } from '$env/static/private';
import type { Category } from '$lib/types/Category';
import type { Business } from '$lib/types/Business';
import type { HomepageCategory } from '$lib/types/Homepage';

// Axios instance with default headers
const api = axios.create({
	baseURL: PAYLOAD_BASE_URL,
});

// Response interceptor
api.interceptors.response.use(
	(response) => response,
	// By doing this, we check if the responses return an AxiosError and handle it.
	(error: AxiosError) => error
);

export const load = (async ({ params }) => {
	const homepageDataResponse = await api.get<HomepageCategory[]>('/homepage');

	if (homepageDataResponse instanceof AxiosError) {
		throw new Error(`Message: ${homepageDataResponse.message}`);
	}

	return { categories: homepageDataResponse.data };

}) satisfies PageServerLoad;
