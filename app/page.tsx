"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import LogoMarquee from "./components/LogoMarquee";

export default function Home() {
  // Categories with products
  const categories = [
    {
      name: "Mobiles",
      products: [
        { id: 1, name: "Apple iPhone 15", price: "₹79,999", image: "/iphone.png", link: "#" },
        { id: 2, name: "Samsung Galaxy S23", price: "₹69,999", image: "/samsung.png", link: "#" },
      ],
    },
    {
      name: "Headphones",
      products: [
        { id: 3, name: "Sony Headphones", price: "₹3,999", image: "/headphones.png", link: "#" },
      ],
    },
  ];

  // State for filtered categories
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [searchClicked, setSearchClicked] = useState(false);

  // Handle search
  const handleSearch = (query: string) => {
    setSearchClicked(true);

    setTimeout(() => {
      if (!query) {
        setFilteredCategories(categories);
      } else {
        const newCats = categories
          .map((cat) => ({
            ...cat,
            products: cat.products.filter((p) =>
              p.name.toLowerCase().includes(query.toLowerCase())
            ),
          }))
          .filter((cat) => cat.products.length > 0);

        setFilteredCategories(newCats);
      }
      setSearchClicked(false);
    }, 300);
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
      {/* Hero Section */}
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg text-center">
        PRICORAA – Compare. Choose. Save. 💸
      </h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Marquee of logos */}
      <LogoMarquee />

      {/* Product Categories */}
      <div className="w-full max-w-6xl mt-8 space-y-10">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-2xl font-bold text-white mb-4">{cat.name}</h2>

              {/* Mobile: horizontal scroll | Desktop: grid */}
              <div className="flex overflow-x-auto space-x-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:space-x-0 scrollbar-hide">
                {cat.products.map((p) => (
                  <ProductCard key={p.id} product={p} searchClicked={searchClicked} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-xl mt-6 text-center">No products found</p>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-white text-sm">
        Affiliate disclaimer: Some links may be affiliate links.
      </footer>
    </main>
  );
}
