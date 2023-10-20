import { configureStore } from '@reduxjs/toolkit';
import listSlice from './Slice/cartSlicer';

export const store = configureStore({
  reducer: {
    liscard: listSlice,
  },
})

export default store.dispatch