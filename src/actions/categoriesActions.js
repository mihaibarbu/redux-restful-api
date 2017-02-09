import axios from 'axios';

import { SET_CATEGORIES } from './types';

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    categories
  }
}

export function fetchCategories() {
  return dispatch => {
    return axios.get('http://testing-react.dev/api/category')
    .then(function (response) {
      console.error(response);
      dispatch(setCategories(response.data));
    })
    .catch(function (error) {
      console.log(error, 'error');
    });
  }
}
