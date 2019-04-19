import { SET_TOKEN } from '../actions/actiontypes';

export default function loginTokenReducer(state = {
 token:''
}, action) {
  console.log("action", action);
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: action.payload.token
      });

    default:
      return state;
  }
}
