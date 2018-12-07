import { combineReducers } from 'redux';
import simpleReducer from './SimpleReducer';
// import userInfo from "../containers/Profile/reducer";
import userInfo from './ProfileReducer';
export default combineReducers({
    simpleReducer,
    userInfo
});
