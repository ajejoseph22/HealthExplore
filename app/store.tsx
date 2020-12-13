import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, Action } from "redux";
import { useDispatch } from "react-redux";
import { reducer as jobsReducer } from "./slices/jobsSlice";

export const reducer = combineReducers({
  jobs: jobsReducer,
});

const _store = configureStore({
  reducer,
  devTools: true,
});

export type Store = typeof _store;

export type RootState = ReturnType<typeof _store.getState>;

export type AppDispatch = typeof _store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = _store;
