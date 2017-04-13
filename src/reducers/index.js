import { combineReducers } from 'redux';

import board from './board';
import isRunning from './control';
import count from './count';

const rootReducer = combineReducers({
  board,
  isRunning,
  count,
});

export default rootReducer;
