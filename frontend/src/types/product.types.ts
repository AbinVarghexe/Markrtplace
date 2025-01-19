export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  _id: string;
  name: string;
  imageUrl: string;
  gallery?: string[];
  price: number;
  rating: number;
};
