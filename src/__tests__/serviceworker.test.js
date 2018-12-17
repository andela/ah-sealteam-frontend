import {
  register,
  checkValidServiceWorker,
  registerValidSW,
  unregister
} from '../serviceWorker';

describe('test service worker', () => {
  test('register function is defined', () => {
    expect(register).toBeDefined();
  });

  test('checkValidServiceWorker function is defined', () => {
    expect(checkValidServiceWorker).toBeDefined();
  });

  test('registerValidSW function is defined', () => {
    expect(registerValidSW).toBeDefined();
  });

  test('unregister function is defined', () => {
    expect(unregister).toBeDefined();
  });
});
