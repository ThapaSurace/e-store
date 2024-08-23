import axios from 'axios';

const BASE_URL = 'https://e-store-tbyv.vercel.app/api/';

export const newRequest = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});
