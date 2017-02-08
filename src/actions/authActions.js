import axios from 'axios';
import jwtDecode from 'jwt-decode';

import config from '../config';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function login(data) {
  return dispatch => {
    let loginData = { ...config.grant, ...data };
    return axios.post('http://testing-react.dev/oauth/token', loginData)
      .then(res => {
        const accessToken = res.data.access_token;
        localStorage.setItem('accessToken', accessToken);
        setAuthorizationToken(accessToken);

        dispatch(setCurrentUser(jwtDecode(accessToken)));
      });
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('accessToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}
