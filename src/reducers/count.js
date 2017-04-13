import * as types from '../actions/actionTypes';

const initialState = 0;

export default function count(state = initialState, action) {
  switch (action.type) {
    case types.RANDOMIZE:
      return 0;
    case types.CLEAR:
      return 0;
    case types.NEXTTICK:
      return state + 1;
    default:
      return state;
  }
}
