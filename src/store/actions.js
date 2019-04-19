import * as ActionTypes from './types';

export addToken = value => {
  return {
    type: ActionTypes.SET_TOKEN,
    payload: value
  }
}
