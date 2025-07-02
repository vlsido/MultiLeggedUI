import type { CategoryAnimals } from "~/types/common";

export const categoriesAnimalsData: CategoryAnimals[] = [
  {
    category: "ISOPODS",
    animals: [
      {
        id: 1,
        imageUrl: "porcellio_laevis_1.png",
        name: "Porcellio Laevis 'Milkback'",
        origin: "Globe",
        size: "2-3 cm",
        humidity: "60%",
        temperature: "18-24",
        description: "Large isopod, very popular and recognizable because of their unique coloring. Very sturdy and easy to keep and breed, perfect species for a beginner. Very forgiving when it comes to temperature changes and moisture fluctuations.",
        units: 0,
        animalPrices: [
          { id: 1, minQuantity: 8, maxQuantity: 20, centsPerUnit: 599 }
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
        origin: "Globe",
        size: "2-3 cm",
        humidity: "60%",
        temperature: "18-24",
        description: "Large isopod, very popular and recognizable because of their unique coloring.Very sturdy and easy to keep and breed, perfect species for a beginner. Very forgiving when it comes to temperature changes and moisture fluctuations.",
        units: 0,
        animalPrices: [
          { id: 1, minQuantity: 8, maxQuantity: 20, centsPerUnit: 599 }
        ],
        form: "eggs"
      },
    ]
  },
]
