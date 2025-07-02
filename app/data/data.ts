import type { CategoryAnimals } from "~/types/common";

export const categoriesAnimalsData: CategoryAnimals[] = [
  {
    category: "ISOPODS",
    animals: [
      {
        id: 1,
        imageUrl: "porcellio_laevis_1.png",
        name: "Porcellio Laevis 'Milkback'",
        description: "Origin: around globe\n Size: 2 - 3 cm\nHumidity: 60 %\nEnvironment temp: 18 - 26 C\nAdditional info: Large isopod, very popular and recognizable because of their unique coloring. Very sturdy and easy to keep and breed, perfect species for a beginner. Very forgiving when it comes to temperature changes and moisture fluctuations.",
        units: 0,
        animalPrices: [
          { id: 1, min_quantity: 8, max_quantity: 20, cents_per_unit: 599 }
        ],
        form: "animals"
      },
    ]
  },
  {
    category: "STICK INSECTS",
    animals: [
      {
        id: 2,
        imageUrl: "medauroidea_extradentata_1.png",
        name: "Medauroidea extradentata 'Annam Walking Stick'",
        description: "Origin: around globe\nSize: 2 - 3 cm\nHumidity: 60 %\nEnvironment temp: 18 - 26 C\nAdditional info: Large isopod, very popular and recognizable because of their unique coloring.Very sturdy and easy to keep and breed, perfect species for a beginner.Very forgiving when it comes to temperature changes and moisture fluctuations.",
        units: 0,
        animalPrices: [
          { id: 1, min_quantity: 8, max_quantity: 20, cents_per_unit: 599 }
        ],
        form: "eggs"
      },
    ]
  },
]
