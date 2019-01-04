/**
 * Function to check if the user is logged in
 * Checks if the user exists in the local sorage
 * If true return the token, else return null
 */
export function auth() {
    const token = localStorage.getItem('user');
    return token ? token : null;
}
