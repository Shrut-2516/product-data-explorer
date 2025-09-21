import { products } from "@/data/products";
import { reviews } from "@/data/reviews"; // <-- create this file
import { Star } from "lucide-react";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  if (!product) return <div className="p-10 text-center">Product not found</div>;

  const productReviews = reviews.filter(r => r.productId === product.id);

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Image */}
        <img src={product.imageUrl} alt={product.title} className="rounded-xl shadow-md" />

        {/* Right: Details */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">₹{product.price}</p>

          {/* ⭐ Rating */}
          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating ?? 0) // ✅ default to 0 if undefined
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">
              ({product.rating ?? 0}/5)
            </span>
          </div>

          {/* Buy button */}
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
        {productReviews.length > 0 ? (
          <div className="space-y-4">
            {productReviews.map(r => (
              <div key={r.id} className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">{r.user}</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-2">{r.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}
