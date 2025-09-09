"use client";

import ProductCard from "./ProductCard";

export default function TrendingSection() {
  const trendingProducts = [
    { id: 101, name: "iPhone 15 Pro", price: "₹1,29,999", image: "/iphone.png", link: "#" },
    { id: 102, name: "MacBook Air M2", price: "₹1,09,999", image: "/macbook.png", link: "#" },
    { id: 103, name: "Samsung Galaxy S23", price: "₹74,999", image: "/samsung.png", link: "#" },
    { id: 104, name: "Sony WH-1000XM5", price: "₹29,999", image: "/headphones.png", link: "#" },
    { id: 105, name: "Nike Air Max", price: "₹8,499", image: "/shoes.png", link: "#" },
    { id: 106, name: "Apple Watch Series 9", price: "₹45,999", image: "/watch.png", link: "#" },
    { id: 107, name: "Canon EOS R50", price: "₹58,999", image: "/camera.png", link: "#" },
  ];

  return (
    <section className="w-full max-w-7xl mt-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gradient mb-6">
        🔥 Trending Now
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {trendingProducts.map((p) => (
          <ProductCard key={p.id} product={p} searchClicked={false} />
        ))}
      </div>
    </section>
  );
}
