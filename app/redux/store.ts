import {
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import speciesReducer from "./slices/speciesSlice";


const rootReducer = combineReducers({
  cart: cartReducer,
  species: speciesReducer
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
    species: speciesReducer
  },
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];

export default store;

