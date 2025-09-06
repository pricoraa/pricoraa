import React from "react";

export default function ProductCard({
  product,
  searchClicked,
}: {
  product: { id: number; name: string; price: string; image: string; link: string };
  searchClicked: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md m-2 w-64 p-4 flex flex-col items-center 
        transform transition-transform duration-300 ${
          searchClicked ? "scale-90 opacity-50" : "scale-100 opacity-100"
        }`}
    >
      {/* Product Image */}
      <img
        src={product.image}   // MUST match file in /public
        alt={product.name}
        className="h-40 w-full object-contain"
      />

      {/* Product Name */}
      <h2 className="mt-2 font-bold text-gray-800 text-center">{product.name}</h2>

      {/* Product Price */}
      <p className="text-green-600 font-semibold mt-1">{product.price}</p>

      {/* Buy Now Button */}
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Buy Now
      </a>
    </div>
  );
}
