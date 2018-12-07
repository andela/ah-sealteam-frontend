import * as jwt from 'jsonwebtoken';

/* Temporary token and user data */
export const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJCb3RuZXRkb2JicyIsImV4cCI6MTU0NDQ3OTUzNX0.gNRC2NaL6BYd0KlRBTvK0W2Z9pL1mYNRWtQToN8ljWI';
const decoded = jwt.decode(token);

export const user = decoded;
