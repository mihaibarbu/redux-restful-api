import { SET_CATEGORIES, ADD_CATEGORY, CATEGORY_FETCHED } from '../actions/types';

export default function categories(state = [], action = {}) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        action.category
      ];

    case CATEGORY_FETCHED:
      const index = state.findIndex(item => item.id === action.category.id);
      if (index > -1) {
        return state.map(item => {
          if (item.id === action.category.id) {
            return action.category;
          }
          return item;
        })
      } else {
        return [
          ...state,
          action.category
        ];
      }

    case SET_CATEGORIES:
      return action.categories;
    default: return state
  }
}
