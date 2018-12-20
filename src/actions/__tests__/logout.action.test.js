import { SOCIALLOGIN_LOGOUT, LOGOUT } from '../../constants';

import { socialLogout, signinLogout } from '../logout.action';

describe('actions', () => {
    it('It must test social logout', () => {
        const expectedAction = {
            type: SOCIALLOGIN_LOGOUT
        };
        expect(socialLogout()).toEqual(expectedAction);
    });

    it('It must test signIn logout', () => {
        const expectedAction = {
            type: LOGOUT
        };
        expect(signinLogout()).toEqual(expectedAction);
    });
});
