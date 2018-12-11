import { BASE_URL } from '../constants';
import axios from 'axios';

export const login = data => {
  const url = `${BASE_URL}users/login`;

  return axios
    .post(url, data)
    .then(response => response.data)
    .catch(error => error);
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const userService = {
  login,
  logout
};

export default userService;
