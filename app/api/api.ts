import type { Country, ParcelMachine, ParcelVendor } from "~/types/common";

const serverIp = "192.168.0.103";

export async function fetchAnimals() {
  const response = await fetch(`http://${serverIp}:8080/api/animals`);

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

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactPayload) {
  console.log(data);
  const res = await fetch(`http://${serverIp}:8080/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to send contact message");
  }

  return res.json().catch(() => ({}));
}
