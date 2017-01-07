import axios from 'axios';

export function login(data) {
  return dispatch => {
    return axios.post('http://testing-react.dev/oauth/token', data);
  }
}
