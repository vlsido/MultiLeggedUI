export type ProductCategory = "ISOPODS" | "STICK INSECTS" | "LEAD INSECTS ";

export interface CategoryProducts {
  category: ProductCategory;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  origin: string | null;
  size: string | null;
  humidity: string | null;
  temperature: string | null;
  description: string;
  units: number;
  productPrices: ProductPrice[];
  form: string;
}

export interface ProductPrice {
  id: number;
  minQuantity: number;
  maxQuantity: number | null;
  centsPerUnit: number;
}

export type ShippingCompany = "Omniva" | "DPD";

export type Country = "EE" | "LV" | "LT";

export interface ShippingCompanyData {
  name: ShippingCompany;
  imageUrl: string;
  priceInCents: number;
}

export interface ShippingLocations {
  companyName: ShippingCompany;
  locations: Location[];
}

interface Location {
  name: string;
  countryCode: string;
}

export interface UserMessage {
  text: string;
  type: "INFO" | "ERROR";
  /**
   * milliseconds
   */
  ms?: number;
}
