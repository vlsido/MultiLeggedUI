import type { ParcelMachine } from "~/types/common";

export async function fetchAnimals() {
  const response = await fetch("http://192.168.0.103:8080/api/animals");

  if (!response.ok) {
    throw new Error("Error fetching animals data");
  }

  const data = await response.json();

  return data;
}


export async function fetchOmnivaParcelMachines(): Promise<ParcelMachine[]> {
  const response = await fetch("/omniva_locations.json");

  if (!response.ok) {
    throw new Error("Error fetching omniva parcel machines locations");
  }

  const data = await response.json();

  const parcelMachines = data.map((machine) => {
    return {
      name: machine.NAME,
      country: machine.A0_NAME
    };
  });

  return parcelMachines;
}

export async function fetchDPDParcelMachines(): Promise<ParcelMachine[]> {
  const response = await fetch("/dpd_locations.json");

  if (!response.ok) {
    throw new Error("Error fetching dpd parcel machines locations");
  }

  const data = await response.json();

  const parcelMachines = data.map((machine) => {
    return {
      name: machine.companyName,
      country: machine.countryCode
    };
  });

  return parcelMachines;
}
