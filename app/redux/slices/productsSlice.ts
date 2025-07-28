import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import type { CategoryProducts } from "~/types/common";
import { categoriesProductsData } from "~/data/data";

export interface ProductsState {
  categoriesProducts: CategoryProducts[];
}

const initialState: ProductsState = {
  categoriesProducts: categoriesProductsData,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategoriesProducts: (
      state,
      action: PayloadAction<CategoryProducts[]>,
    ) => {
      state.categoriesProducts = action.payload;
    },
    clearCategoriesProducts: (state) => {
      state.categoriesProducts = [];
    },
  },
});

export const { setCategoriesProducts, clearCategoriesProducts } =
  productsSlice.actions;

export const selectCategoriesProducts = (state: RootState) =>
  state.products.categoriesProducts;

export default productsSlice.reducer;
