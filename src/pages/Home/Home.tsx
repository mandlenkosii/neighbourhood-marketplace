import { useMemo, useState } from "react";

import Layout from "../../components/layout/Layout";
import ItemCard from "../../components/marketplace/ItemCard";
import SearchBar from "../../components/marketplace/SearchBar";
import CategoryFilter from "../../components/marketplace/CategoryFilter";

import { items } from "../../data/items";
import type { Category } from "../../types/Category";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<Category | "All">("All");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <Layout>
      <section className="py-12">
        <h1 className="text-5xl font-bold text-slate-900">
          Borrow. Share. Connect.
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Find tools and equipment from trusted neighbours.
        </p>

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <CategoryFilter
          selected={category}
          onSelect={setCategory}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="mt-20 rounded-2xl bg-white p-10 text-center shadow">
            <h2 className="text-2xl font-semibold">
              No items found
            </h2>

            <p className="mt-3 text-slate-500">
              Try another search or category.
            </p>
          </div>
        )}
      </section>
    </Layout>
  );
}