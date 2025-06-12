export async function fetchSpecies() {
  const response = await fetch("http://localhost:8080/api/species");

  if (!response.ok) {
    throw new Error("Error fetching species data");
  }

  const data = await response.json();

  return data;
}
