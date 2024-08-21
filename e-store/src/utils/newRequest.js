import axios from 'axios';

const BASE_URL = 'https://e-store-pi.vercel.app/api/';

export const newRequest = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});
