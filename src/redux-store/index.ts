import { configureStore, combineReducers } from '@reduxjs/toolkit';
import theme from './application-theme/reducer';

const rootReducer = combineReducers({
  theme,
});

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
