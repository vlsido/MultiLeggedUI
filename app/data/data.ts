import type { Species } from "~/types/common";


export const animalsData: Species[] = [
  {
    name: "ISOPODS",
    data: [

      {
        id: 1,
        imageUrl: "porcellio_laevis_1.png",
        names: [
          "Porcellio Laevis",
          "Milkback"
        ],
        description: "Origin: around globe\n Size: 2 - 3 cm\nHumidity: 60 %\nEnvironment temp: 18 - 26 C\nAdditional info: Large isopod, very popular and recognizable because of their unique coloring.Very sturdy and easy to keep and breed, perfect species for a beginner.Very forgiving when it comes to temperature changes and moisture fluctuations.",
        units: 0,
        speciesPacks: [
          { id: 1, units: 8, price: 599 }
        ]
      },
    ]
  },
  {
    name: "STICK INSECTS",
    data: [
      {
        id: 2,
        imageUrl: "medauroidea_extradentata_1.png",
        names: [
          "Medauroidea extradentata",
          "Milkback"
        ],
        description: "Origin: around globe\nSize: 2 - 3 cm\nHumidity: 60 %\nEnvironment temp: 18 - 26 C\nAdditional info: Large isopod, very popular and recognizable because of their unique coloring.Very sturdy and easy to keep and breed, perfect species for a beginner.Very forgiving when it comes to temperature changes and moisture fluctuations.",
        units: 0,
        speciesPacks: [
          { id: 3, units: 10, price: 499 }
        ]
      },
    ]
  },
]
