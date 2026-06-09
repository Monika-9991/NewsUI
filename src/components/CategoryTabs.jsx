import { NavLink } from "react-router-dom";

const categories = ["Business", "Sports", "Technology", "Entertainment", "Health", "Science"];

export default function CategoryTabs() {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-3 max-w-7xl mx-auto px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-1.5 rounded-full text-xs md:text-sm font-medium border whitespace-nowrap transition-all duration-200 ${
              isActive ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300"
            }`
          }
        >
          🔥 Trending
        </NavLink>
        {categories.map((cat) => (
          <NavLink
            key={cat}
            to={`/category/${cat.toLowerCase()}`}
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full text-xs md:text-sm font-medium border whitespace-nowrap transition-all duration-200 ${
                isActive ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300"
              }`
            }
          >
            {cat}
          </NavLink>
        ))}
      </div>
    </div>
  );
}