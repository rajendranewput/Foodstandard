import {createSlice} from '@reduxjs/toolkit';
import {LOADER_HANDLER_TYPES} from 'constants/index';

const defaultLoadersState = {
  [LOADER_HANDLER_TYPES.page]: false,
  [LOADER_HANDLER_TYPES.submit]: false,
  [LOADER_HANDLER_TYPES.table]: false,
  [LOADER_HANDLER_TYPES.dialog]: false,
};

const loaderSlice = createSlice({
  name: 'loaderSlice',
  initialState: defaultLoadersState,
  reducers: {
    startLoader: (state, action) => {
      return {
        ...state,
        [action.payload]: true,
      };
    },
    stopLoader: (state, action) => {
      return {
        ...state,
        [action.payload]: false,
      };
    },
  },
});

export const {startLoader, stopLoader} = loaderSlice.actions;

export default loaderSlice.reducer;
