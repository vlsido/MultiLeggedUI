export async function fetchAnimals() {
  const response = await fetch("http://localhost:8080/api/animals");

  if (!response.ok) {
    throw new Error("Error fetching animals data");
  }

  const data = await response.json();

  return data;
}
