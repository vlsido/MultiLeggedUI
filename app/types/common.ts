export type AnimalCategory = "ISOPODS" | "STICK INSECTS" | "LEAD INSECTS ";

export interface CategoryAnimals {
  category: AnimalCategory;
  animals: Animal[];
}

export interface Animal {
  id: number;
  name: string;
  imageUrl: string;
  origin: string | null;
  size: string | null;
  humidity: string | null;
  temperature: string | null;
  description: string;
  units: number;
  animalPrices: AnimalPrice[];
  form: string;
}

export interface AnimalPrice {
  id: number;
  minQuantity: number;
  maxQuantity: number | null;
  centsPerUnit: number;
}

export type ParcelVendor = "Omniva" | "DPD";

export type Country = "EE" | "LV" | "LT";

export interface ParcelVendorData {
  name: ParcelVendor;
  imageUrl: string;
  priceInCents: number;
}

export interface ParcelMachine {
  company: ParcelVendor;
  name: string;
  country: "EE" | "LV" | "LT";
}
