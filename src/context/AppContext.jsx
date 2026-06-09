import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [bookmarks, setBookmarks] = useState(() => JSON.parse(localStorage.getItem("bookmarks")) || []);
  const [recentSearches, setRecentSearches] = useState(() => JSON.parse(localStorage.getItem("recentSearches")) || []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const toggleBookmark = (article) => {
    setBookmarks((prev) => {
      const exists = prev.find((item) => item.url === article.url);
      if (exists) return prev.filter((item) => item.url !== article.url);
      return [...prev, article];
    });
  };

  const addSearchQuery = (query) => {
    if (!query.trim()) return;
    setRecentSearches((prev) => {
      const filtered = prev.filter((q) => q !== query);
      return [query, ...filtered].slice(0, 5);
    });
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, bookmarks, toggleBookmark, recentSearches, addSearchQuery }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);