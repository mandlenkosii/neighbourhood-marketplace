import Layout from "../../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="py-16">
        <h1 className="max-w-2xl text-5xl font-bold leading-tight">
          Borrow tools and equipment from people nearby.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-slate-600">
          Save money, reduce waste, and connect with your local community by
          borrowing instead of buying.
        </p>

        <input
          placeholder="Search for drills, ladders, camping gear..."
          className="mt-10 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
        />
      </section>
    </Layout>
  );
}