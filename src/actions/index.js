import { SET_TOKEN } from './actiontypes';

export function addToken(token) {
  return {
    type: SET_TOKEN,
    payload: {
      token
    }
  }
}
