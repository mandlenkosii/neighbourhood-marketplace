import Layout from "../../components/layout/Layout";
import ItemCard from "../../components/marketplace/ItemCard";
import { items } from "../../data/items";

export default function Home() {
  return (
    <Layout>
      <section className="py-12">
        <h1 className="text-5xl font-bold text-slate-900">
          Borrow. Share. Connect.
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Find tools, camping gear, garden equipment, and more from trusted
          people in your community.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </Layout>
  );
}