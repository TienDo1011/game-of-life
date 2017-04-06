import * as types from './actionTypes';

export const addRecipe = (title, ingredients) => ({
  type: types.ADD_RECIPE,
  title,
  ingredients,
});

export const editRecipe = (id, title, ingredients) => ({
  type: types.EDIT_RECIPE,
  id,
  title,
  ingredients,
});

export const deleteRecipe = id => ({
  type: types.DELETE_RECIPE,
  id,
});
