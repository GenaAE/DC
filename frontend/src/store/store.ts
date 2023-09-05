import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import investorSlice from '../features/UserTable/investorSlice';

const store = configureStore({
  reducer: {
    investors: investorSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
