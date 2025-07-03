import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import type { AnimalCategory } from "~/types/common";

interface CartItem {
  animalId: number;
  priceId: number;
  units: number;
  name: string;
  imageUrl: string;
  form: string;
  category: AnimalCategory;
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
      const itemIndex = state.cartItems.findIndex(
        (ci) => ci.priceId === action.payload.priceId,
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.priceId !== action.payload,
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    addPack: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cartItems.findIndex(
        (ci) => ci.priceId === action.payload,
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removePack: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cartItems.findIndex(
        (ci) => ci.priceId === action.payload && ci.quantity > 1,
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.priceId !== action.payload,
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
  addPack,
  removePack,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
