import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Seaside Villa",
    rating: 4.8,
    address: {
      city: "Cape Town",
      country: "South Africa",
    },
    image: "/images/villa-main.jpg",
    images: [
      "/images/villa-main.jpg",
      "/images/villa-living.jpg",
      "/images/villa-bedroom.jpg",
      "/images/villa-pool.jpg",
    ],
    description: "A beautiful seaside villa with stunning ocean views.",
    category: ["WiFi", "Pool", "Air Conditioning", "Parking"],
    price: 120,
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/user1.jpg",
        rating: 5,
        comment: "Amazing stay! Loved every moment.",
      },
      {
        name: "Jane Smith",
        avatar: "/images/user2.jpg",
        rating: 4,
        comment: "Great location and facilities. Will book again.",
      },
    ],
  },
];
