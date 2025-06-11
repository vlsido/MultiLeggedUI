export interface AnimalGroup {
  group: "ISOPODS" | "STICK INSECTS" | "LEAF INSECTS";
  animals: Animal[];
}

export interface Animal {
  id: number;
  name: string;
  imageUrl: string;
  names: string[];
  description: string;
  units: number;
  orderPacks: {
    units: number,
    price: number
  }[];
}

export const groupsData: string[] = [
  "Isopods",
  "Stick insects",
  "Leaf insects"
];

export const animalsData: AnimalGroup[] = [
  {
    group: "ISOPODS",
    animals: [

      {
        id: 1,
        name: "Porcellio Laevis \"Milkback\"",
        imageUrl: "PorcellioLaevis1.jpg",
        names: [
          "Milkback"
        ],
        description: "Origin: around globe\n Size: 2 - 3 cm\nHumidity: 60 %\nEnvironment temp: 18 - 26 C\nAdditional info: Large isopod, very popular and recognizable because of their unique coloring.Very sturdy and easy to keep and breed, perfect species for a beginner.Very forgiving when it comes to temperature changes and moisture fluctuations.",
        units: 100,
        orderPacks: [
          { units: 8, price: 899 }
        ]
      },
    ]
  },
  {
    group: "STICK INSECTS",
    animals: [
      {
        id: 2,
        name: "Achrioptera Manga \"Metallic Stick Insect\"",
        imageUrl: "AchriopteraManga.jpg",
        names: [
          "Milkback"
        ],
        description: "Origin: around globe\nSize: 2 - 3 cm\nHumidity: 60 %\nEnvironment temp: 18 - 26 C\nAdditional info: Large isopod, very popular and recognizable because of their unique coloring.Very sturdy and easy to keep and breed, perfect species for a beginner.Very forgiving when it comes to temperature changes and moisture fluctuations.",
        units: 100,
        orderPacks: [
          { units: 8, price: 899 }
        ]
      },
      {
        id: 3,
        name: "Medauroidea extradentata",
        imageUrl: "MedauroideaExtradentata.jpg",
        names: [
          "Milkback"
        ],
        description: "Origin: around globe\nSize: 2 - 3 cm\nHumidity: 60 %\nEnvironment temp: 18 - 26 C\nAdditional info: Large isopod, very popular and recognizable because of their unique coloring.Very sturdy and easy to keep and breed, perfect species for a beginner.Very forgiving when it comes to temperature changes and moisture fluctuations.",
        units: 100,
        orderPacks: [
          { units: 8, price: 899 }
        ]
      },
    ]
  },
  {
    group: "LEAF INSECTS",
    animals: [
      {
        id: 4,
        name: "Phyllium letiranti \"Tataba\"",
        imageUrl: "PhylliumLetiranti.jpg",
        names: [
          "Milkback"
        ],
        description: "Origin: around globe\nSize: 2 - 3 cm\nHumidity: 60 %\nEnvironment temp: 18 - 26 C\nAdditional info: Large isopod, very popular and recognizable because of their unique coloring.Very sturdy and easy to keep and breed, perfect species for a beginner.Very forgiving when it comes to temperature changes and moisture fluctuations.",
        units: 100,
        orderPacks: [
          { units: 8, price: 899 }
        ]
      },
    ]
  }
]
