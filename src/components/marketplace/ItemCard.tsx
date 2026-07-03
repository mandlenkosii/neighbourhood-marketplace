import type { Item } from "../../types/Item";

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
      <img
        src={item.images[0]}
        alt={item.title}
        className="h-52 w-full object-cover"
      />

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{item.title}</h3>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
            {item.category}
          </span>
        </div>

        <p className="text-sm text-slate-600">
          {item.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <span>📍 {item.owner.location}</span>

          <span>{item.distance} km</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-emerald-600">
            R{item.pricePerDay}/day
          </span>

          <button className="rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
            View
          </button>
        </div>
      </div>
    </div>
  );
}