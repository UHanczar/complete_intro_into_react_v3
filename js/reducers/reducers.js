import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './../actions/actions';

const searchTerm = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }

  return state;
};

const apiData = (state = {}, action) => {
  if (action.type === ADD_API_DATA) {
    // es5 way to do it
    // const obj = {};
    // const key = action.payload.imdbID;
    // obj[key] = action.payload;

    // es6 way
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload});
  }

  return state;
};

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
