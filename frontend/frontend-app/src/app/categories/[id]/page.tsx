"use client";

import Link from "next/link";
import { Book, Laptop, Shirt, Watch, Headphones, Camera } from "lucide-react";

const categories = [
  { id: "c1", title: "Books", desc: "Find your next great read.", icon: <Book className="h-12 w-12 text-blue-600 mx-auto mb-4" /> },
  { id: "c2", title: "Electronics", desc: "Latest gadgets & devices.", icon: <Laptop className="h-12 w-12 text-blue-600 mx-auto mb-4" /> },
  { id: "c3", title: "Clothing", desc: "Style that fits you.", icon: <Shirt className="h-12 w-12 text-blue-600 mx-auto mb-4" /> },
  { id: "c4", title: "Accessories", desc: "Trendy watches & more.", icon: <Watch className="h-12 w-12 text-blue-600 mx-auto mb-4" /> },
  { id: "c5", title: "Audio", desc: "Best headphones & speakers.", icon: <Headphones className="h-12 w-12 text-blue-600 mx-auto mb-4" /> },
  { id: "c6", title: "Cameras", desc: "Capture life’s best moments.", icon: <Camera className="h-12 w-12 text-blue-600 mx-auto mb-4" /> },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Browse Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/products/${cat.id}`}  // ✅ clicking category shows its products
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 text-center"
          >
            {cat.icon}
            <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
            <p className="text-gray-600">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
