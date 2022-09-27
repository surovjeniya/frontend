import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { fakestoreApi } from "./api/fakestore";
import switchCategoryReducer from "./slice/swith-category.slice";

const combinedReducer = combineReducers({
  [fakestoreApi.reducerPath]: fakestoreApi.reducer,
  switchCategory: switchCategoryReducer,
});

const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  });

type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore);
