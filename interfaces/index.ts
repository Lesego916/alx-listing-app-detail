export interface Address {
  city: string;
  country: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  id: string;
  name: string;
  rating: number;
  address: Address;
  image: string;
  images: string[];
  description: string;
  category: string[];
  price: number;
  reviews: Review[];
}