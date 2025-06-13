export interface Species {
  name: "ISOPODS" | "STICK INSECTS" | "LEAF INSECTS";
  data: SpeciesData[];
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
