import {
  type PayloadAction,
  createSlice
} from "@reduxjs/toolkit";
import { type RootState } from "../store";

export interface Species {
  name: "ISOPODS" | "STICK INSECTS" | "LEAF INSECTS";
  species: SpeciesData[];
}

export interface SpeciesData {
  id: number;
  names: string[];
  imageUrl: string;
  description: string;
  units: number;
  speciesPacks: {
    id: number,
    units: number,
    price: number
  }[];
}

export interface SpeciesState {
  species: Species[],
}

const initialState: SpeciesState = {
  species: [],
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
