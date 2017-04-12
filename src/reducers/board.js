import * as types from '../actions/actionTypes';

export default function gameOfLife(state = initialState, action) {
  switch (action.type) {
    case types.ADD_RECIPE:
      newState = [
        ...state,
        {
          title: action.title,
          ingredients: action.ingredients.split(','),
        },
      ];
      localStorage.setItem('recipeBook', JSON.stringify(newState));
      return newState;
    case types.EDIT_RECIPE:
      newState = [...state];
      newState[action.id].title = action.title;
      newState[action.id].ingredients = Array.isArray(action.ingredients) ? action.ingredients : action.ingredients.split(',');
      localStorage.setItem('recipeBook', JSON.stringify(newState));
      return newState;
    case types.DELETE_RECIPE:
      newState = [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1),
      ];
      localStorage.setItem('recipeBook', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
}
