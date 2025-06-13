import {
  type PayloadAction,
  createSlice
} from "@reduxjs/toolkit";
import { type RootState } from "../store";
import type { Species } from "~/types/common";
import { animalsData } from "~/data/data";


export interface SpeciesState {
  species: Species[],
}

const initialState: SpeciesState = {
  species: animalsData,
}

export const speciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {
    setSpecies: (
      state, action: PayloadAction<Species[]>
    ) => {
      state.species = action.payload;
      localStorage.setItem(
        "species",
        JSON.stringify(action.payload)
      );
    },
    clearSpecies: (state) => {
      state.species = [];
      localStorage.removeItem("species");
    }
  },
});

export const {
  setSpecies,
  clearSpecies,
} = speciesSlice.actions;

export const selectSpecies = (state: RootState) => state.species.species;

export default speciesSlice.reducer;
