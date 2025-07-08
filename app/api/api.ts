import type { Country, ParcelMachine, ParcelVendor } from "~/types/common";

export async function fetchAnimals() {
  const response = await fetch("http://192.168.0.102:8080/api/animals");

  if (!response.ok) {
    throw new Error("Error fetching animals data");
  }

  const data = await response.json();

  return data;
}

interface DpdResponseData {
  companyName: string;
  countryCode: string;
}

interface OmnivaResponseData {
  NAME: string;
  A0_NAME: string;
}

export async function fetchParcelMachines(): Promise<ParcelMachine[]> {
  try {
    const dpdResponse = await fetch("/dpd_locations.json");

    if (!dpdResponse.ok) {
      throw new Error("Error fetching dpd parcel machines locations");
    }

    const dpdData: DpdResponseData[] = await dpdResponse.json();

    const omnivaResponse = await fetch("/omniva_locations.json");

    if (!omnivaResponse.ok) {
      throw new Error("Error fetching omniva parcel machines locations");
    }
    const omnivaData: OmnivaResponseData[] = await omnivaResponse.json();

    const parcelMachines = dpdData
      .map((machine: DpdResponseData) => {
        return {
          company: "DPD" as ParcelVendor,
          name: machine.companyName,
          country: machine.countryCode as Country,
        };
      })
      .concat(
        omnivaData.map((machine: OmnivaResponseData) => {
          return {
            company: "Omniva" as ParcelVendor,
            name: machine.NAME,
            country: machine.A0_NAME as Country,
          };
        }),
      );

    return parcelMachines;
  } catch (error) {
    throw error;
  }
}
