import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('http://testing-react.dev/api/user', userData);
  }
}
