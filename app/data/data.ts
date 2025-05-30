export interface AnimalGroup {
  group: "ISOPODS" | "STICK INSECTS" | "LEAF INSECTS";
  animals: Animal[];
}

export interface Animal {
  name: string;
  imageUrl: string;
  names: string[];
  origin: string;
  size: string;
  humidity: string;
  environment: string;
  info: string;
  unitsLeft: number;
  ppu: number;
}

export const animalsData: AnimalGroup[] = [
  {
    group: "ISOPODS",
    animals: [

      {
        name: "Porcellio Laevis \"Milkback\"",
        imageUrl: "PorcellioLaevis1.jpg",
        names: [
          "Milkback"
        ],
        origin: "around globe",
        size: "2-3 cm",
        humidity: "60%",
        environment: "18-26 C",
        info: "Large isopod, very popular and recognizable because of their unique coloring. Very sturdy and easy to keep and breed, perfect species for a beginner. Very forgiving when it comes to temperature changes and moisture fluctuations.",
        unitsLeft: 100,
        ppu: 1
      },
    ]
  },
  {
    group: "STICK INSECTS",
    animals: [
      {
        name: "Achrioptera Manga \"Metallic Stick Insect\"",
        imageUrl: "AchriopteraManga.jpg",
        names: [
          "Milkback"
        ],
        origin: "around globe",
        size: "2-3 cm",
        humidity: "60%",
        environment: "18-26 C",
        info: "Large isopod, very popular and recognizable because of their unique coloring. Very sturdy and easy to keep and breed, perfect species for a beginner. Very forgiving when it comes to temperature changes and moisture fluctuations.",
        unitsLeft: 100,
        ppu: 1
      },
      {
        name: "Medauroidea extradentata",
        imageUrl: "MedauroideaExtradentata.jpg",
        names: [
          "Milkback"
        ],
        origin: "around globe",
        size: "2-3 cm",
        humidity: "60%",
        environment: "18-26 C",
        info: "Large isopod, very popular and recognizable because of their unique coloring. Very sturdy and easy to keep and breed, perfect species for a beginner. Very forgiving when it comes to temperature changes and moisture fluctuations.",
        unitsLeft: 100,
        ppu: 1
      },
    ]
  },
  {
    group: "LEAF INSECTS",
    animals: [
      {
        name: "Phyllium letiranti \"Tataba\"",
        imageUrl: "PhylliumLetiranti.jpg",
        names: [
          "Milkback"
        ],
        origin: "around globe",
        size: "2-3 cm",
        humidity: "60%",
        environment: "18-26 C",
        info: "Large isopod, very popular and recognizable because of their unique coloring. Very sturdy and easy to keep and breed, perfect species for a beginner. Very forgiving when it comes to temperature changes and moisture fluctuations.",
        unitsLeft: 100,
        ppu: 1
      },
    ]
  }
]
