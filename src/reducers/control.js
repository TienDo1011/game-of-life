import * as types from '../actions/actionTypes';

const initialState = false;

export default function isRunning(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_PLAY:
      return !state;
    default:
      return state;
  }
}
