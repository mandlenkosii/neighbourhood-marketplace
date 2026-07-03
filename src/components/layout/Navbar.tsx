import { Link } from "react-router-dom";
import { User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          NeighbourHub
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link
            to="/"
            className="font-medium text-slate-700 hover:text-blue-600"
          >
            Browse
          </Link>

          <Link
            to="/login"
            className="font-medium text-slate-700 hover:text-blue-600"
          >
            Login
          </Link>
        </nav>

        <div className="flex gap-4">
          <Search className="cursor-pointer text-slate-600" />
          <User className="cursor-pointer text-slate-600" />
        </div>
      </div>
    </header>
  );
}