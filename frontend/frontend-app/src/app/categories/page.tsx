import { fetchCategories } from "@/lib/api";

export default async function CategoriesPage() {
  const categories = await fetchCategories();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat: any) => (
          <li key={cat.id} className="bg-white p-4 shadow rounded">
            {cat.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
