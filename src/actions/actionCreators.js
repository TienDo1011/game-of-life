import * as types from './actionTypes';

export const toggleAlive = (x, y) => ({
  type: types.TOGGLE_ALIVE,
  x,
  y,
});

export const randomize = () => ({
  type: types.RANDOMIZE,
});

export const CLEAR = () => ({
  type: types.CLEAR,
});

export const TOGGLE_PLAY = () => ({
  type: types.TOGGLE_PLAY,
});

export const NEXTTICK = () => ({
  type: types.NEXTTICK,
});
