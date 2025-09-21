import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Subcategory {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode;
}

interface SubcategoryGridProps {
  subcategories: Subcategory[];
}

export default function SubcategoryGrid({ subcategories }: SubcategoryGridProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Subcategories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subcategories.map((sub) => (
          <Card
            key={sub.id}
            className="hover:shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer"
          >
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">{sub.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">{sub.name}</h3>
              <p className="text-gray-500 text-sm mt-2">{sub.description}</p>
              <div className="mt-4 flex justify-center text-blue-600 hover:underline">
                <ArrowRight size={18} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
