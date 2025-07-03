import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import type { AnimalPrice } from "~/types/common";

interface CartItem {
  animalId: number;
  name: string;
  imageUrl: string;
  form: string;
  animalPrices: AnimalPrice[];
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
      localStorage.setItem("cartItems", JSON.stringify(action.payload));
    },
    pushToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.cartItems.find(
        (ci) => ci.animalId === action.payload.animalId,
      );
      if (item === undefined) {
        state.cartItems.push(action.payload);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.animalId !== action.payload,
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseItem: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((ci) => ci.animalId === action.payload);
      if (item !== undefined) {
        item.quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    decreaseItem: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(
        (ci) => ci.animalId === action.payload && ci.quantity > 1,
      );
      if (item !== undefined) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.animalId !== action.payload,
        );
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const {
  setCartItems,
  pushToCart,
  removeFromCart,
  increaseItem,
  decreaseItem,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
