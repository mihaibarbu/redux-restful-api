import { SET_CATEGORIES, ADD_CATEGORY } from '../actions/types';

export default function categories(state = [], action = {}) {
  console.error('action', action);
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        action.category
      ]
    case SET_CATEGORIES:
      return action.categories;
    default: return state
  }
}
