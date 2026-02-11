"use client";

import { useState } from "react";
import Link from "next/link";
import { shopWines, categories } from "@/data/wines";
import { useCart } from "@/context/CartContext";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { addToCart } = useCart();

  const filtered = activeCategory === "all"
    ? shopWines
    : shopWines.filter((w) => w.category === activeCategory || (activeCategory === "gift" && w.isGiftBox));

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=600&fit=crop')" }} />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center text-cream px-6">
          <p className="uppercase tracking-luxury text-gold/70 text-[11px] mb-6">Emportez l&apos;Expérience</p>
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal mb-6">Boutique</h1>
          <p className="text-cream/45 max-w-md mx-auto font-light leading-relaxed">
            Our curated selection of wines, available for delivery across Luxembourg.
          </p>
        </div>
      </section>

      {/* Delivery Info */}
      <div className="border-b border-charcoal/5">
        <div className="container-custom mx-auto py-5 px-6 flex flex-wrap items-center justify-center gap-8 text-[11px] text-charcoal/35 tracking-wider uppercase">
          <span>Free delivery over €100</span>
          <span className="w-px h-3 bg-charcoal/10" />
          <span>Delivery in 2–3 days</span>
          <span className="w-px h-3 bg-charcoal/10" />
          <span>Gift wrapping available</span>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 text-[11px] tracking-luxury uppercase transition-all duration-500 ${
                activeCategory === "all" ? "bg-charcoal text-cream" : "text-charcoal/40 hover:text-charcoal"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-[11px] tracking-luxury uppercase transition-all duration-500 ${
                  activeCategory === cat.id ? "bg-charcoal text-cream" : "text-charcoal/40 hover:text-charcoal"
                }`}
              >
                {cat.label}
              </button>
            ))}
            <button
              onClick={() => setActiveCategory("gift")}
              className={`px-5 py-2.5 text-[11px] tracking-luxury uppercase transition-all duration-500 ${
                activeCategory === "gift" ? "bg-charcoal text-cream" : "text-charcoal/40 hover:text-charcoal"
              }`}
            >
              Gift Boxes
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-14">
            {filtered.map((wine) => (
              <div key={wine.id} className="wine-card group flex flex-col">
                <Link href={`/shop/${wine.id}`} className="block">
                  <div className="aspect-[3/4] overflow-hidden mb-5">
                    <img
                      src={wine.image}
                      alt={wine.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                </Link>
                <div className="flex flex-col flex-1">
                  {wine.isGiftBox && (
                    <span className="text-[10px] tracking-luxury uppercase text-gold mb-2">Gift Box</span>
                  )}
                  <p className="text-[10px] uppercase tracking-luxury text-charcoal/30 mb-2">{wine.region}</p>
                  <Link href={`/shop/${wine.id}`}>
                    <h3 className="font-playfair text-lg mb-1 hover:opacity-60 transition-opacity duration-500">{wine.name}</h3>
                  </Link>
                  <p className="text-[11px] text-charcoal/35 mb-2 font-light">{wine.grape} · {wine.vintage}</p>
                  <p className="text-xs text-charcoal/40 mb-5 line-clamp-2 font-light leading-relaxed flex-1">{wine.tastingNotes}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-charcoal/5">
                    <span className="text-burgundy text-lg">€{wine.priceShop}</span>
                    <button
                      onClick={() => addToCart(wine)}
                      className="text-[10px] tracking-luxury uppercase text-charcoal/40 hover:text-charcoal border-b border-charcoal/20 pb-0.5 transition-colors duration-500"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
