import * as types from '../actions/actionTypes';

const initialState = true;

export default function isRunning(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_PLAY:
      return !state;
    case types.CLEAR:
      return false;
    case types.RANDOMIZE:
      return false;
    default:
      return state;
  }
}
