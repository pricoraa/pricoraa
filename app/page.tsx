"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import LogoMarquee from "./components/LogoMarquee";

export default function Home() {
  // Master list of all products
  const allProducts = [
    { id: 1, name: "Apple iPhone 15", price: "₹79,999", image: "/iphone.png", link: "#" },
    { id: 2, name: "Samsung Galaxy S23", price: "₹69,999", image: "/samsung.png", link: "#" },
    { id: 3, name: "Sony Headphones", price: "₹3,999", image: "/headphones.png", link: "#" },
  ];

  // State for displayed products
  const [products, setProducts] = useState(allProducts);
  const [searchClicked, setSearchClicked] = useState(false);

  // Filter products based on search query
  const handleSearch = (query: string) => {
    setSearchClicked(true); // start zoom-out animation

    setTimeout(() => {
      if (!query) {
        setProducts(allProducts); // reset if search is empty
      } else {
        setProducts(
          allProducts.filter((p) =>
            p.name.toLowerCase().includes(query.toLowerCase())
          )
        );
      }
      setSearchClicked(false); // end zoom-out animation
    }, 300); // matches animation duration
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
      {/* Hero Section */}
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg text-center">
        PRICORAA – Compare. Choose. Save. 💸
      </h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />
      <LogoMarquee />



      {/* Products Display */}
      <div className="flex flex-wrap justify-center mt-8">
        {products.length > 0 ? (
          products.map((p) => (
            <ProductCard key={p.id} product={p} searchClicked={searchClicked} />
          ))
        ) : (
          <p className="text-white text-xl mt-6">No products found</p>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-white text-sm">
        Affiliate disclaimer: Some links may be affiliate links.
      </footer>
    </main>
  );
}
