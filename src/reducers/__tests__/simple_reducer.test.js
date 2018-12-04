import * as actions from '../../actions/simple_action';
import SimpleReducer from '../SimpleReducer';
const state = {};
describe('Simple Reducer', () => {
  it('should return payload action when SIMPLE ACTION is dispatched', () => {
    const action = actions.simpleAction();
    const newState = SimpleReducer(state, action);
    expect(Object.keys(newState).length).toEqual(1);
    expect(newState.result).toBe('result_of_simple_action');
  });
});
