import * as types from '../actions/actionTypes';
import * as grid from '../utils/grid.js';

const HEIGHT = 24;
const WIDTH = 40;
const initialState = grid.initialGrid(HEIGHT, WIDTH, true);
let newState;

export default function board(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_ALIVE:
      newState = JSON.parse(JSON.stringify(state));
      newState[action.x][action.y] = { status: !newState[action.x][action.y].status };
      return newState;
    case types.RANDOMIZE:
      return grid.initialGrid(HEIGHT, WIDTH, true);
    case types.CLEAR:
      return grid.initialGrid(HEIGHT, WIDTH)
    case types.NEXTTICK:
      return grid.advanceGrid(state);
    default:
      return state;
  }
}
