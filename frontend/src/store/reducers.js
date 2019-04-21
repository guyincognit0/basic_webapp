import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { SET_USER } from './actions'


function user(state = '', action) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}

function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    user
  });
}

export default rootReducer
