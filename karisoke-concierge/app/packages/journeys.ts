export const categories = [
  "All packages",
  "Gorilla trekking",
  "Wildlife safaris",
  "Combined journeys",
] as const;

export type Category = (typeof categories)[number];

export type Journey = {
  id: string;
  title: string;
  price: string;
  category: Exclude<Category, "All packages">;
  image: string;
  gallery: string[];
  alt: string;
  days: number;
  nights: number;
  route: string;
  description: string;
  highlights: string[];
  accommodation: string;
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];
};

export const journeys: Journey[] = [
  {
    id: "volcanoes",
    price: "15,827",
    title: "A Journey to the Volcanoes",
    category: "Gorilla trekking",
    image: "/images/gorilla-slider.jpg",
    gallery: ["/images/gorilla-slider.jpg", "/images/gorilla-safari-rwanda-1.jpg", "/images/Gorilla-slider-on-bisoke-mtn.jpg", "/images/Infant-Gorilla-playing-with-mother.jpg", "/images/silverback-gorillas.jpg"],
    alt: "Mountain gorilla in Rwanda’s green forest",
    days: 3,
    nights: 2,
    route: "Kigali · Musanze · Kigali",
    description:
      "Head towards the highlands for a mountain escape built around a possible gorilla trekking experience.",
    highlights: [
      "A stay around Musanze",
      "Gorilla trekking, subject to confirmed permits",
      "Time to relax after your trek",
    ],
    accommodation:
      "Two suggested nights around Musanze. Your accommodation and meal plan will be selected according to your preferences, budget, and availability.",
    itinerary: [
      {
        day: "Day 1",
        title: "From Kigali to the highlands",
        description:
          "Travel to the Musanze area, settle into your accommodation, and prepare for the next day.",
      },
      {
        day: "Day 2",
        title: "Your mountain experience",
        description:
          "If permits are confirmed, attend the park briefing and join your allocated gorilla trekking group. Leave the afternoon flexible for rest.",
      },
      {
        day: "Day 3",
        title: "Return to Kigali",
        description:
          "Enjoy breakfast before your return transfer. Timing will be planned around your onward arrangements.",
      },
    ],
  },
  {
    id: "akagera",
    price: "11,427",
    title: "The Akagera Wildlife Escape",
    category: "Wildlife safaris",
    image: "/images/Rwanda-Wildlife-in-Akagera-NP.jpg",
    gallery: ["/images/Rwanda-Wildlife-in-Akagera-NP.jpg", "/images/African-Lion.jpg", "/images/Kenya-Wildlife.jpg", "/images/Multi-country-tours.jpg"],
    alt: "Wildlife in Akagera National Park",
    days: 3,
    nights: 2,
    route: "Kigali · Akagera · Kigali",
    description:
      "Open landscapes, time outdoors, and the anticipation of a wildlife encounter. Make space for a safari escape.",
    highlights: [
      "Guided game-drive planning",
      "Two nights in the Akagera area",
      "Optional boat excursion enquiry",
    ],
    accommodation:
      "Two suggested nights in or near Akagera. Your quote will specify the property, meals, park access, and activities.",
    itinerary: [
      {
        day: "Day 1",
        title: "Begin your safari escape",
        description:
          "Transfer from Kigali to your selected accommodation. Afternoon plans depend on arrival time and confirmed arrangements.",
      },
      {
        day: "Day 2",
        title: "Explore Akagera",
        description:
          "Set aside the day for a guided game drive. Discuss an optional boat excursion when planning your itinerary.",
      },
      {
        day: "Day 3",
        title: "A relaxed departure",
        description:
          "Have breakfast before travelling back to Kigali, with departure timing agreed in advance.",
      },
    ],
  },
  {
    id: "rwanda-contrasts",
    price: "20,077",
    title: "Rwanda’s Wild Contrasts",
    category: "Combined journeys",
    image: "/images/Multi-country-tours.jpg",
    gallery: ["/images/Multi-country-tours.jpg", "/images/Rwanda-Wildlife-in-Akagera-NP.jpg", "/images/gorilla-slider.jpg", "/images/Gorilla-slider-on-bisoke-mtn.jpg", "/images/African-Lion.jpg"],
    alt: "Wildlife and landscapes across an East African journey",
    days: 7,
    nights: 6,
    route: "Kigali · Akagera · Musanze · Kigali",
    description:
      "Combine a wildlife stay with a mountain adventure, taking time to experience two very different sides of Rwanda.",
    highlights: [
      "An arrival night in Kigali",
      "An Akagera wildlife experience",
      "A mountain stay with a possible gorilla trek",
    ],
    accommodation:
      "A suggested split of one night in Kigali, two in the Akagera area, and three around Musanze. All properties and services are confirmed in your proposal.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive in Kigali",
        description:
          "Transfer to your accommodation and settle in. Optional city exploration depends on your arrival time.",
      },
      {
        day: "Days 2–3",
        title: "Your wildlife chapter",
        description:
          "Travel to the Akagera area and enjoy time set aside for confirmed guided activities.",
      },
      {
        day: "Day 4",
        title: "Travel to the mountains",
        description:
          "Allow a dedicated transfer day to reach Musanze, with breaks along the way.",
      },
      {
        day: "Days 5–6",
        title: "Explore at your pace",
        description:
          "Plan a gorilla trek if permits are confirmed, with another day available for rest or an additional activity.",
      },
      {
        day: "Day 7",
        title: "Return to Kigali",
        description:
          "Travel back to Kigali according to your onward schedule.",
      },
    ],
  },
  {
    id: "mountains-kivu",
    price: "15,096",
    title: "Mountains & Lakeside Days",
    category: "Combined journeys",
    image: "/images/golden-monkey-slider-1600-x-550.jpg",
    gallery: ["/images/golden-monkey-slider-1600-x-550.jpg", "/images/Rwanda-Golden-monkeys.jpg", "/images/gorilla-safari-rwanda-1.jpg", "/images/Gorilla-slider-on-bisoke-mtn.jpg", "/images/silverback-gorillas-Ucumbi-and-Turakomeje.jpg"],
    alt: "Golden monkey in Rwanda’s mountain forest",
    days: 5,
    nights: 4,
    route: "Kigali · Musanze · Lake Kivu · Kigali",
    description:
      "Pair a mountain stay with a slower lakeside finish. A suggested journey for those who enjoy adventure and downtime.",
    highlights: [
      "Two nights around Musanze",
      "Optional gorilla trekking enquiry",
      "Two nights by Lake Kivu",
    ],
    accommodation:
      "Two suggested nights around Musanze followed by two nights near Lake Kivu. Properties, meals, and activities will be agreed before booking.",
    itinerary: [
      {
        day: "Day 1",
        title: "Into the highlands",
        description:
          "Travel from Kigali to Musanze and settle into your selected accommodation.",
      },
      {
        day: "Day 2",
        title: "Your mountain day",
        description:
          "Choose a suitable activity during planning. Gorilla trekking requires a confirmed permit.",
      },
      {
        day: "Day 3",
        title: "Continue to Lake Kivu",
        description:
          "Transfer to your lakeside accommodation and leave time to unwind.",
      },
      {
        day: "Day 4",
        title: "Slow the pace",
        description:
          "Enjoy a free day by the lake or discuss an optional local experience when requesting your quote.",
      },
      {
        day: "Day 5",
        title: "Back to Kigali",
        description:
          "Return to Kigali with your transfer scheduled around your onward plans.",
      },
    ],
  },
];

