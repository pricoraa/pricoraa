"use client";

import ProductCard from "./ProductCard";

export default function CategorySection() {
  const categories = [
    {
      name: "📱 Mobile Phones",
      products: [
        { id: 201, name: "iPhone 15", price: "₹79,999", image: "/iphone.png", link: "#" },
        { id: 202, name: "Samsung Galaxy S23", price: "₹69,999", image: "/samsung.png", link: "#" },
      ],
    },
    {
      name: "🎧 Headphones",
      products: [
        { id: 203, name: "Sony WH-1000XM5", price: "₹29,999", image: "/headphones.png", link: "#" },
        { id: 204, name: "Boat Rockerz 550", price: "₹2,499", image: "/boat.png", link: "#" },
      ],
    },
  ];

  return (
    <section className="w-full max-w-7xl mt-12 px-4">
      {categories.map((cat, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gradient">{cat.name}</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {cat.products.map((p) => (
              <ProductCard key={p.id} product={p} searchClicked={false} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
