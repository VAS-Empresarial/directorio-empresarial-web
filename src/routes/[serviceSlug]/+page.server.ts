import type { PageServerLoad } from './$types';
import { AxiosError } from 'axios';
import api from '$lib/api';
import type { PayloadResponse } from '$lib/types/PayloadResponse';
import type { Service } from '$lib/types/Service';
import type { Business } from '$lib/types/Business';

export const load: PageServerLoad = async ({ params }) => {
	const { serviceSlug } = params;

	const fetchService = async () => {
		const serviceResponse = await api.get<Service>(`/services?where[slug][equals]=${serviceSlug}`);

		if (serviceResponse instanceof AxiosError) {
			throw new Error(`Message: ${serviceResponse.message}`);
		}

		return serviceResponse.data;
	}

	const fetchBusinesses = async () => {
		const businessesResponse = await api.get<Business[]>(`/businesses?where[services.slug][equals]=${serviceSlug}&sort=name`);

		if (businessesResponse instanceof AxiosError) {
			throw new Error(`Message: ${businessesResponse.message}`);
		}

		return businessesResponse.data;
	}

	return {
		service: fetchService(),
		businesses: fetchBusinesses(),
	};
};
