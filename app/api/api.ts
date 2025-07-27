import { serverIp } from "~/constants/common";
import type { ShippingLocations } from "~/types/common";

export async function fetchAnimals() {
  const response = await fetch(`http://${serverIp}:8080/api/animals`);

  if (!response.ok) {
    throw new Error("Error fetching animals data");
  }

  const data = await response.json();

  return data;
}

export async function fetchShippingLocations(): Promise<ShippingLocations[]> {
  try {
    const response = await fetch(
      `http://${serverIp}:8080/api/shipping-locations`,
    );

    if (!response.ok) {
      throw new Error("Error fetching animals data");
    }

    const data = await response.json();

    return data;
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
