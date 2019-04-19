import { combineReducers } from 'redux'

import { GET_USER, SET_USER } from './actions'


function user(state = {}, action) {
  switch (action.type) {
    case GET_USER:
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user
})

export default rootReducer
