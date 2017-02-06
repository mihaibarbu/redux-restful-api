import axios from 'axios';

export function createEvent(event) {
  return dispatch => {
    return axios.post('http://testing-react.dev/api/event', event);
  };
}
