import axios, { AxiosError } from 'axios';
import { PAYLOAD_BASE_URL } from '$env/static/private';

// Axios instance with default headers
const api = axios.create({
	baseURL: PAYLOAD_BASE_URL,
});

// Response interceptor
api.interceptors.response.use(
	(response) => response,
	// By doing this, we can check if the responses return an AxiosError and handle it.
	(error: AxiosError) => error
);

export default api;
