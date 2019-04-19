import { combineReducers } from 'redux';
import LoginToken from './loginTokenReducer';

export default combineReducers({
    LoginToken: LoginToken
});
