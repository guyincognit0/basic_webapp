import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'


import user from './auth'
import submissions from './submissions'


function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    submissions,
    user,
  });
}

export default rootReducer
