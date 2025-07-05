import { combineReducers, configureStore, type Store } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import animalsReducer from "./slices/animalsSlice";
import userMessageReducer from "./slices/userMessageSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  animals: animalsReducer,
  userMessage: userMessageReducer
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

function loadStateFromLocalStorage(): RootState | undefined {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.warn("Failed to load state", err);
    return undefined;
  }
}

const state = loadStateFromLocalStorage();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: state,
});

store.subscribe(() => {
  try {
    const state = store.getState();
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.warn("Failed to save state", err);
  }
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];

export default store;
