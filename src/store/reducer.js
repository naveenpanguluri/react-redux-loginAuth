import { combineReducers } from 'redux';

import * as ActionTypes from './types';

const initState = {
  LoginToken: '',
};

loginTokenReducer = (state = initState.LoginToken, action) => {
  console.log("action", action);
  if (action.type === ActionTypes.SET_TOKEN){
      return action.payload
  }
  else{
      return state;
  }
}

export default combineReducers({
    LoginToken: loginTokenReducer
});
