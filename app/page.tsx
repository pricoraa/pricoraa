"use client";

import { useState } from "react";
import Image from "next/image";
import SearchBar from "./components/SearchBar";
import LogoMarquee from "./components/LogoMarquee";
import TrendingSection from "./components/TrendingSection";
import CategoriesSection from "./components/CategoriesSection";
import WhyChooseSection from "./components/WhyChooseSection";

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
    setSearchClicked(true);

    setTimeout(() => {
      if (!query) {
        setProducts(allProducts);
      } else {
        setProducts(
          allProducts.filter((p) =>
            p.name.toLowerCase().includes(query.toLowerCase())
          )
        );
      }
      setSearchClicked(false);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <Image
            src="/pricoraa-logo.png"
            alt="Pricoraa Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            PRICORAA
          </h1>
        </div>
        <nav className="flex space-x-6 text-gray-300 font-medium">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Search</a>
          <a href="#" className="hover:text-white">Trending</a>
        </nav>
      </header>

      {/* Search Section */}
      <section className="flex flex-col items-center px-6 py-12 text-center">
        <SearchBar onSearch={handleSearch} />

        {/* Hero Text */}
        <div className="mt-8 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find the{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Best Deals
            </span>{" "}
            Across the Web
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Search millions of products, compare prices instantly, and get detailed
            feature comparisons from Amazon, Flipkart, Myntra, and 6 more platforms.
          </p>
        </div>
      </section>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Trending Products Section */}
      <TrendingSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Why Choose Pricoraa Section */}
      <WhyChooseSection />

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-gray-400 text-sm border-t border-gray-800">
        Affiliate disclaimer: Some links may be affiliate links.
      </footer>
    </main>
  );
}
