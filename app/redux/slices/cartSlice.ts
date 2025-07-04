import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import type { AnimalPrice } from "~/types/common";

export interface CartItemProps {
  animalId: number;
  name: string;
  imageUrl: string;
  form: string;
  animalPrices: AnimalPrice[];
  unitsLeft: number;
  quantity: number;
}

export interface CartState {
  cartItems: CartItemProps[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItemProps[]>) => {
      state.cartItems = action.payload;
      localStorage.setItem("cartItems", JSON.stringify(action.payload));
    },
    pushToCart: (state, action: PayloadAction<CartItemProps>) => {
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
    setItemQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      const item = state.cartItems.find(
        (ci) => ci.animalId === action.payload.id,
      );
      if (item !== undefined) {
        item.quantity = action.payload.quantity;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
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
  setItemQuantity,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
