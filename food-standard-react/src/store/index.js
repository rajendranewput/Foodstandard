import {combineReducers} from '@reduxjs/toolkit';
import loaderSlice from './loader/loader.slice';
// import menuSlice from './menus/menu.slice';
// import recipeSlice from './recipes/recipe.slice';
import toasterSlice from './toaster/toaster.slice';
export const rootReducer = combineReducers({
  toaster: toasterSlice,
  loader: loaderSlice,
  // menu: menuSlice,
  // recipe: recipeSlice,
});
