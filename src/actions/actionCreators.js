import * as types from './actionTypes';

export const toggleAlive = (x, y) => ({
  type: types.TOGGLE_ALIVE,
  x,
  y,
});

export const randomize = () => ({
  type: types.RANDOMIZE,
});

export const clear = () => ({
  type: types.CLEAR,
});

export const togglePlay = () => ({
  type: types.TOGGLE_PLAY,
});

export const nextTick = () => ({
  type: types.NEXTTICK,
});
