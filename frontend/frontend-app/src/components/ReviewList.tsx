import { Star } from "lucide-react";

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
}

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
      <div className="space-y-4">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{rev.user}</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < rev.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700">{rev.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
