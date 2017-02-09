import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import categories from './reducers/categories';

export default combineReducers({
  flashMessages,
  auth,
  categories
});
