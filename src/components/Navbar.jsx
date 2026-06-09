import { Link } from "react-router-dom";
import { Sun, Moon, BookmarkCheck } from "lucide-react";
import { useApp } from "../context/AppContext";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const { theme, toggleTheme, bookmarks } = useApp();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          NEWS<span className="text-slate-900 dark:text-white">PULSE</span>
        </Link>

        <div className="flex-1 max-w-md hidden md:block">
          <SearchBar />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs font-bold bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-300">
            <BookmarkCheck className="h-4 w-4 text-blue-500" /> ({bookmarks.length})
          </div>

          <button onClick={toggleTheme} className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <div className="px-4 pb-3 md:hidden">
        <SearchBar />
      </div>
    </nav>
  );
}