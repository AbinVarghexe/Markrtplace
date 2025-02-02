export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  _id: number;
  name: string;
  imageUrl: string;
  gallery?: string[];
  price: number;
  rating: number;
};
