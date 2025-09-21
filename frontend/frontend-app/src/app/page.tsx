"use client";

import Link from "next/link";
import {
  Book,
  Laptop,
  Shirt,
  Watch,
  Headphones,
  Camera,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <img
          src="https://source.unsplash.com/1600x900/?shopping,ecommerce,store"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 opacity-90">
            Explore a wide variety of categories and find the best products at unbeatable prices.
          </p>
          <Link
            href="/categories"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Start Exploring <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Book className="h-12 w-12 text-blue-600 mx-auto mb-4" />, title: "Books", desc: "Find your next great read." },
            { icon: <Laptop className="h-12 w-12 text-blue-600 mx-auto mb-4" />, title: "Electronics", desc: "Latest gadgets & devices." },
            { icon: <Shirt className="h-12 w-12 text-blue-600 mx-auto mb-4" />, title: "Clothing", desc: "Style that fits you." },
            { icon: <Watch className="h-12 w-12 text-blue-600 mx-auto mb-4" />, title: "Accessories", desc: "Trendy watches & more." },
            { icon: <Headphones className="h-12 w-12 text-blue-600 mx-auto mb-4" />, title: "Audio", desc: "Best headphones & speakers." },
            { icon: <Camera className="h-12 w-12 text-blue-600 mx-auto mb-4" />, title: "Cameras", desc: "Capture life’s best moments." },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 text-center"
            >
              {cat.icon}
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-600">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={`https://source.unsplash.com/400x300/?product,${id}`}
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">Product {id}</h3>
                  <p className="text-gray-600 mb-3">$ {(id * 20).toFixed(2)}</p>
                  <Link
                    href={`/product/p${id}`}
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Favorite?</h2>
        <p className="max-w-xl mx-auto mb-8 opacity-90">
          Browse trending products and enjoy a seamless shopping experience with us.
        </p>
        <Link
          href="/products/all"
          className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
