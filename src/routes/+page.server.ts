import type { PageServerLoad } from './$types';
import axios from 'axios';
import { PAYLOAD_BASE_URL } from '$env/static/private';
import type { Category } from '$lib/interfaces/Category';
import type { Business } from '$lib/interfaces/Business';

// Axios instance with default headers
const api = axios.create({
	baseURL: PAYLOAD_BASE_URL,
});

function handleRequestError(error: any): void {
    if (error.response) {
		// The server responded with a status code that falls out of the range of 2xx

		console.error('Error response', error.response);
		// console.log(error.response.data);
		// console.log(error.response.status);
		// console.log(error.response.headers);
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.error('Error request', error.request);
	} else {
		// Something happened in setting up the request that triggered an Error
		console.error('Error message', error.message);
	}
}

export const load = (async ({ params }) => {
	const [categoriesResponse, businessesResponse] = await Promise.all([
		api.get('/categories?sort=displayOrder')
			.catch(handleRequestError),
		api.get('/businesses?sort=name')
			.catch(handleRequestError),
	]);

	const categories: Category[] = categoriesResponse?.['data']?.['docs'] || [];
	const businesses: Business[] = businessesResponse?.['data']?.['docs'] || [];

	return { categories, businesses };

}) satisfies PageServerLoad;
