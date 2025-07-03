import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import animalsReducer from "./slices/animalsSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  animals: animalsReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    animals: animalsReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];

export default store;
