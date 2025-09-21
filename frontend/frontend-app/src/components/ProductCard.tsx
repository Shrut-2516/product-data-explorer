import { Star } from "lucide-react";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${
        i < Math.floor(product.rating ?? 0)
          ? "fill-yellow-400 text-yellow-400"
          : "text-gray-300"
      }`}
    />
  ));

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
      <img src={product.imageUrl} alt={product.title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <div className="flex items-center mt-2">{stars}</div>
        <p className="text-blue-600 font-bold mt-3">₹{product.price}</p>
      </div>
    </div>
  );
}
