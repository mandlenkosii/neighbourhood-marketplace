import type { Category } from "../../types/Category";

interface Props {
  selected: Category | "All";
  onSelect: (category: Category | "All") => void;
}

const categories: (Category | "All")[] = [
  "All",
  "Tools",
  "Garden",
  "Camping",
  "Cleaning",
  "DIY",
  "Sports",
];

export default function CategoryFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-5 py-2 transition ${
            selected === category
              ? "bg-blue-600 text-white"
              : "bg-white border border-slate-300 hover:bg-slate-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}