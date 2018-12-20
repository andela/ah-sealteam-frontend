import axios from 'axios';
import { BASE_URL } from '../constants';

export const getArticles = page => {
    let url = `${BASE_URL}articles`;
    if (page) {
        url = url + `?page=${page}`;
    }

    return axios.get(url);
};

export const articlesService = {
    getArticles
};

export default articlesService;
