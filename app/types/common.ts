export type AnimalCategory = "ISOPODS" | "STICK INSECTS" | "LEAD INSECTS ";

export interface CategoryAnimals {
  category: AnimalCategory;
  animals: Animal[];
}

export interface Animal {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  units: number;
  animalPrices: AnimalPrice[];
  form: string;
}

export interface AnimalPrice {
  id: number;
  min_quantity: number;
  max_quantity: number;
  cents_per_unit: number;
}
