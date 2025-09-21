import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "p1",
    title: "Wireless Headphones",  // ✅ use title
    description: "Experience crystal-clear sound with noise cancellation.",
    price: 2999,
    imageUrl: "/images/headphones.jpg",
    categoryId: "electronics",
    rating: 4.5,
  },
  {
    id: "p2",
    title: "Classic Novel",
    description: "A timeless piece of literature for book lovers.",
    price: 499,
    imageUrl: "/images/book.jpg",
    categoryId: "books",
    rating: 4.2,
  },
  {
    id: "p3",
    title: "Men's Casual Shirt",
    description: "Comfortable and stylish for everyday wear.",
    price: 999,
    imageUrl: "/images/shirt.jpg",
    categoryId: "clothing",
    rating: 4.0,
  },
];
