import ReactDOM from 'react-dom';
require('../index');

jest.mock('react-dom');

test('Renders the application', () => {
  expect(ReactDOM.render).toBeCalled();
});
