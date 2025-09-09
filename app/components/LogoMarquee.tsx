"use client";

import Image from "next/image";

export default function LogoMarquee() {
  const logos = [
    "/amazon-logo.png",
    "/flipkart-logo.png",
    "/meesho-logo.png",
    "/myntra-logo.png",
    "/snapdeal-logo.png",
    "/ebay-logo.png",
    "/ajio-logo.png",
    "/tatacliq-logo.png",
    "/shopsy-logo.png",
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="marquee-item">
            <Image src={logo} alt={`logo-${index}`} width={100} height={30} />
          </div>
        ))}
      </div>
    </div>
  );
}
