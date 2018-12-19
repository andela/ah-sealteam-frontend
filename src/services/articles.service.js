import { BASE_URL } from '../constants';
import axios from 'axios';

export const getArticles = () => {
    const url = `${BASE_URL}articles`;

    return axios.get(url);
};

export const articlesService = {
    getArticles
};

export default articlesService;
