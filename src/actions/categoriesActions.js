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
      dispatch(setCategories(response.data));
    })
    .catch(function (error) {
      console.log(error, 'error');
    });
  }
}

export function createCategory(category) {
  return dispatch => {
    return axios.post('http://testing-react.dev/api/category', category);
  }
}
