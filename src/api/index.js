import axios from 'axios';
import {BASE_URL, NEWS_API_KEY} from '../utils/constants';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {Authorization: NEWS_API_KEY},
});

const getHeadLines = (payload) => api.get('/top-headlines?country=us');

export default {
    getHeadLines,
};
