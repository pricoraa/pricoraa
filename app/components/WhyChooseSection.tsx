export default function WhyChoose() {
  const features = [
    { title: "⚡ Instant Comparison", desc: "Get real-time price comparison across top stores." },
    { title: "✅ Verified Deals", desc: "Only trusted and authentic deals are shown." },
    { title: "🔍 Feature Analysis", desc: "Compare detailed features before making a decision." },
    { title: "📈 Price Trends", desc: "Track price drops and trends over time." },
  ];

  return (
    <section className="w-full max-w-7xl mt-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gradient mb-8">Why Choose PRICORAA?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-sm opacity-80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
