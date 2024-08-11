import axios from "axios";

const BASE_URL = "https://e-store-api-uawo.onrender.com/api/"

export const newRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})