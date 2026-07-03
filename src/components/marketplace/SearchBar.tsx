interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mt-10">
      <input
        type="text"
        placeholder="Search drills, ladders, camping gear..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg shadow-sm outline-none transition focus:border-blue-500"
      />
    </div>
  );
}