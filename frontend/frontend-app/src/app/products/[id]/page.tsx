"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const params = useParams();
  const id = params?.id as string;

  const filteredProducts: Product[] =
    id === "all" ? products : products.filter((p) => p.categoryId === id);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">
        {id === "all" ? "All Products" : `Products in ${id}`}
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
