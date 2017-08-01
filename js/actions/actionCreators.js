import axios from 'axios';

import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export const setSearchTerm = (searchTerm) => {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
};

export const addAPIData = (apiData) => {
  return {
    type: ADD_API_DATA,
    payload: apiData
  };
};

export const getAPIDetails = (imdbID) => {
  return (dispatch) => {
    axios
    .get(`http://localhost:3000/${imdbID}`)
    .then(response => dispatch(addAPIData(response.data)))
    .catch(error => console.log(error));
  };
};
