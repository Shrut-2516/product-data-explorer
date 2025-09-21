export interface Product {
  id: string;
  title: string;     // ✅ must match products.ts
  description: string;
  price: number;
  imageUrl: string;
  categoryId: string;
  rating: number;
}
