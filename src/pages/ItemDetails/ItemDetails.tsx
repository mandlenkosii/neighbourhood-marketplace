import { Navigate, useParams } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import BookingForm from "../../components/booking/BookingForm";
import { items } from "../../data/items";

export default function ItemDetails() {
  const { id } = useParams();

  const item = items.find((item) => item.id === id);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <div className="grid gap-10 py-10 lg:grid-cols-2">
        <div>
          <img
            src={item.images[0]}
            alt={item.title}
            className="h-[450px] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
            {item.category}
          </span>

          <h1 className="mt-5 text-4xl font-bold">
            {item.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {item.description}
          </p>

          <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-semibold">
              Owner
            </h2>

            <p className="mt-4 font-medium">
              {item.owner.firstName} {item.owner.lastName}
            </p>

            <p className="text-slate-600">
              📍 {item.owner.location}
            </p>

            <p className="text-slate-600">
              ⭐ {item.owner.rating}
            </p>
          </div>

          <div className="mt-8">
            <BookingForm
              itemId={item.id}
              pricePerDay={item.pricePerDay}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}