import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import authSlice from '../../entities/users/authSlice';
import sneakerSlice from '../../entities/sneakers/sneakerSlice';
import likeSlice from '../../entities/like/likeSlice';

import sizeSlice from '../../entities/sizes/sizeSlice';
import brandSlice from '../../entities/brand/brandSlice';
import colorSlice from '../../entities/color/colorSlice';
import sexSlice from '../../entities/sex/sexSlice';
import basketSlice from '../../entities/basket/basketSlice';

const store = configureStore({
  reducer: {
    user: authSlice.reducer,
    sneakers: sneakerSlice.reducer,
    likes: likeSlice.reducer,
    sizes: sizeSlice.reducer,
    brands: brandSlice.reducer,
    colors: colorSlice.reducer,
    sexes: sexSlice.reducer,
    basket: basketSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
