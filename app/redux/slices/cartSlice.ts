import {
  type PayloadAction,
  createSlice
} from "@reduxjs/toolkit";
import { type RootState } from "../store";

interface CartItem {
  id: number;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[],
}

const initialState: CartState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (
      state, action: PayloadAction<CartItem[]>
    ) => {
      state.cartItems = action.payload;
      localStorage.setItem(
        "cartItems",
        JSON.stringify(action.payload)
      );
    },
    pushToCart: (
      state, action: PayloadAction<CartItem>
    ) => {
      state.cartItems.push(action.payload);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },
    removeFromCart: (
      state, action: PayloadAction<number>
    ) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    }
  },
});

export const {
  setCartItems,
  pushToCart,
  removeFromCart,
  clearCart
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
