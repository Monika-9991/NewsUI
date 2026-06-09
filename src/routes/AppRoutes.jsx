import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Category from "../pages/Category";
import NewsDetails from "../pages/NewsDetails";
import SearchResults from "../pages/SearchResults";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}