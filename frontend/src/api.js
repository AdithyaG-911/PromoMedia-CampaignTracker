import axios from 'axios';
const API = axios.create({ baseURL: 'https://promomedia-campaigntracker-production.up.railway.app/api' });
export default API;