import Link from "next/link";
import { featuredWines } from "@/data/wines";

export default function Home() {
  return (
    <>
      {/* Hero — Full screen cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 parallax-slow"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center text-cream px-6 max-w-5xl">
          <p className="animate-fade-in-slow uppercase tracking-luxury text-gold/80 text-[11px] mb-10">
            Bar à Vins · Grund, Luxembourg
          </p>
          <h1 className="animate-fade-in font-playfair text-6xl sm:text-7xl lg:text-[110px] leading-[0.95] mb-10 font-normal">
            Vins Fins
          </h1>
          <p className="animate-fade-in-delayed text-base sm:text-lg text-cream/60 mb-14 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Exceptional wines, refined cuisine, in the heart of Luxembourg&apos;s most enchanting quarter.
          </p>
          <div className="animate-fade-in-delayed-2 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact#reservation" className="border border-cream/30 text-cream px-12 py-4 text-[11px] tracking-luxury uppercase hover:bg-cream hover:text-charcoal transition-all duration-700">
              Réserver une Table
            </Link>
            <Link href="/wines" className="border border-cream/15 text-cream/70 px-12 py-4 text-[11px] tracking-luxury uppercase hover:border-cream/40 hover:text-cream transition-all duration-700">
              Découvrir nos Vins
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-cream/30 animate-fade-in-delayed-2" />
        </div>
      </section>

      {/* Introduction — Generous whitespace */}
      <section className="section-padding">
        <div className="container-custom mx-auto text-center max-w-2xl">
          <div className="divider-gold mb-10" />
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl mb-8 leading-tight">
            Where Wine Tells a Story
          </h2>
          <p className="text-charcoal/50 leading-[1.9] text-base font-light tracking-wide">
            Nestled along the Alzette River in Luxembourg&apos;s historic Grund quarter,
            Vins Fins is a haven for wine lovers. Our carefully curated cellar celebrates
            terroir-driven wines from passionate artisan producers, complemented by
            seasonal cuisine crafted with the finest local ingredients.
          </p>
        </div>
      </section>

      {/* Featured Wines — Asymmetric, minimal */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 sm:py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <p className="uppercase tracking-luxury text-gold text-[11px] mb-5">Notre Cave</p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl">Featured Wines</h2>
            </div>
            <Link href="/wines" className="text-[11px] tracking-luxury uppercase text-charcoal/40 hover:text-charcoal transition-colors duration-500 border-b border-charcoal/20 pb-1 self-start lg:self-auto">
              View Full Collection
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featuredWines.slice(0, 6).map((wine) => (
              <div key={wine.id} className="wine-card group">
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={wine.image}
                    alt={wine.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-luxury text-gold/70 mb-3">{wine.region}</p>
                <h3 className="font-playfair text-xl mb-2">{wine.name}</h3>
                <p className="text-xs text-charcoal/40 mb-3 font-light">{wine.grape} · {wine.vintage}</p>
                <p className="text-sm text-charcoal/50 mb-5 line-clamp-2 font-light leading-relaxed">{wine.tastingNotes}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-burgundy">€{wine.priceGlass} <span className="text-charcoal/30 font-light">/ glass</span></span>
                  <span className="text-charcoal/30">·</span>
                  <span className="text-charcoal/40 font-light">€{wine.priceBottle} / bottle</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Triptych — Asymmetric info cards */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-charcoal/5">
            {/* Menu */}
            <div className="bg-cream p-12 sm:p-16 text-center group">
              <p className="text-[11px] uppercase tracking-luxury text-gold mb-6">Cuisine</p>
              <h3 className="font-playfair text-2xl mb-4">Our Menu</h3>
              <p className="text-charcoal/40 text-sm mb-8 font-light leading-relaxed max-w-xs mx-auto">
                Seasonal French-inspired cuisine designed to complement our wines perfectly.
              </p>
              <Link href="/menu" className="text-[11px] uppercase tracking-luxury text-charcoal/40 hover:text-charcoal border-b border-charcoal/15 pb-1 transition-colors duration-500">
                Voir la Carte
              </Link>
            </div>

            {/* E-Shop */}
            <div className="bg-charcoal p-12 sm:p-16 text-center group">
              <p className="text-[11px] uppercase tracking-luxury text-gold/70 mb-6">Boutique</p>
              <h3 className="font-playfair text-2xl mb-4 text-cream">Shop Online</h3>
              <p className="text-cream/40 text-sm mb-8 font-light leading-relaxed max-w-xs mx-auto">
                Take the experience home. Browse our selection of wines available for delivery.
              </p>
              <Link href="/shop" className="text-[11px] uppercase tracking-luxury text-cream/40 hover:text-cream border-b border-cream/15 pb-1 transition-colors duration-500">
                Visiter la Boutique
              </Link>
            </div>

            {/* Visit */}
            <div className="bg-cream p-12 sm:p-16 text-center group">
              <p className="text-[11px] uppercase tracking-luxury text-gold mb-6">Visite</p>
              <h3 className="font-playfair text-2xl mb-4">Visit Us</h3>
              <p className="text-charcoal/40 text-sm font-light mb-2">18 Rue Münster, Grund</p>
              <p className="text-charcoal/40 text-sm font-light mb-1">Tue–Sat: 12h–14h30 & 18h30–23h</p>
              <p className="text-charcoal/40 text-sm font-light mb-8">Sun: 12h–15h</p>
              <Link href="/contact" className="text-[11px] uppercase tracking-luxury text-charcoal/40 hover:text-charcoal border-b border-charcoal/15 pb-1 transition-colors duration-500">
                Nous Trouver
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Cinematic parallax */}
      <section className="relative py-40 sm:py-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center text-cream px-6">
          <p className="uppercase tracking-luxury text-gold/60 text-[11px] mb-8">Expérience</p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl mb-6 max-w-2xl mx-auto leading-tight">
            An Unforgettable Evening Awaits
          </h2>
          <p className="text-cream/40 mb-12 max-w-md mx-auto font-light leading-relaxed">
            Reserve your table and let us craft a memorable wine and dining experience for you.
          </p>
          <Link href="/contact#reservation" className="border border-cream/30 text-cream px-14 py-4 text-[11px] tracking-luxury uppercase hover:bg-cream hover:text-charcoal transition-all duration-700 inline-block">
            Réserver
          </Link>
        </div>
      </section>
    </>
  );
}
