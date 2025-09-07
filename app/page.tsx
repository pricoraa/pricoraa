"use client";

import { useState } from "react";
import Image from "next/image";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import LogoMarquee from "./components/LogoMarquee";

export default function Home() {
  // Categories with products
  const categories = [
    {
      name: "Mobile Phones",
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

  const [searchClicked, setSearchClicked] = useState(false);

  // Search handler
  const handleSearch = (query: string) => {
    setSearchClicked(true);
    setTimeout(() => {
      // For now, search is only UI animation
      setSearchClicked(false);
    }, 300);
  };

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between p-4 bg-white/10 backdrop-blur-md shadow-md">
        <div className="flex items-center">
          <Image
            src="/pricoraa-logo.png"
            alt="Pricoraa Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </div>
      </header>

      {/* Hero Section */}
      <div className="p-6 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          PRICORAA – Compare. Choose. Save. 💸
        </h1>

        {/* Search Bar */}
        <div className="mt-6">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Moving e-commerce logos */}
        <LogoMarquee />
      </div>

      {/* Products Section */}
      <div className="flex flex-col gap-12 p-6">
        {categories.map((category) => (
          <section key={category.name}>
            <h2 className="text-2xl font-bold text-white mb-4">{category.name}</h2>
            <div className="flex overflow-x-auto gap-4 pb-4">
              {category.products.map((p) => (
                <ProductCard key={p.id} product={p} searchClicked={searchClicked} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-white text-sm text-center p-4">
        Affiliate disclaimer: Some links may be affiliate links.
      </footer>
    </main>
  );
}
