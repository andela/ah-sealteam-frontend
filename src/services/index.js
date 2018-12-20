export * from './login.service';

export const IsAuthenticated = () => {
    return localStorage.getItem('user');
};
export * from './articles.service';
