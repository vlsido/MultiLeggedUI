import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import type { CategoryAnimals } from "~/types/common";
import { categoriesAnimalsData } from "~/data/data";

export interface AnimalsState {
  categoriesAnimals: CategoryAnimals[];
}

const initialState: AnimalsState = {
  categoriesAnimals: categoriesAnimalsData,
};

export const animalsSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    setCategoriesAnimals: (state, action: PayloadAction<CategoryAnimals[]>) => {
      state.categoriesAnimals = action.payload;
      localStorage.setItem(
        "categories_animals",
        JSON.stringify(action.payload),
      );
    },
    clearCategoriesAnimals: (state) => {
      state.categoriesAnimals = [];
      localStorage.removeItem("categories_animals");
    },
  },
});

export const { setCategoriesAnimals, clearCategoriesAnimals } =
  animalsSlice.actions;

export const selectCategoriesAnimals = (state: RootState) =>
  state.animals.categoriesAnimals;

export default animalsSlice.reducer;
