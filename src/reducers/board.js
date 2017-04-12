import * as types from '../actions/actionTypes';
import * as grid from '../utils/grid.js';

const HEIGHT = 24;
const WIDTH = 40;
const initialState = grid.initialGrid(HEIGHT, WIDTH, true);

export default function board(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_ALIVE:
      const newState = JSON.parse(JSON.stringify(state));
      newState[action.x][action.y] = { status: !newState[action.x][action.y]};
      return newState;
    case types.RANDOMIZE:
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
