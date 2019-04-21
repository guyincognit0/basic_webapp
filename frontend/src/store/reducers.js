import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { SET_USER ,
         SUBMISSIONS_SET,
         SUBMISSIONS_SORT } from './actions'


function user(state = 'nouser', action) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}

function submissions(state = [], action) {
  switch (action.type) {
    case SUBMISSIONS_SET:
      return {
        sortKey: '',
        direction: 'ascending',
        data: action.payload.data,
      };
    case SUBMISSIONS_SORT:
      const sortKey = action.payload.sortKey;
      if (state.sortKey !== sortKey) {
        return {
          sortKey: action.payload.sortKey,
          direction: 'ascending',
          data: state.data.sort((a, b) => a[sortKey] < b[sortKey] ? 1 : -1),
        };
      } else {
        return {
          ...state,
          direction: state.direction === 'ascending' ? 'descending' : 'ascending',
          data: state.data.reverse(),
        };
      }
    default:
      return state;
  }
}

function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    submissions,
    user,
  });
}

export default rootReducer
