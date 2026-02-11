"use client";

import Link from "next/link";
import { featuredWines } from "@/data/wines";
import { useLanguage } from "@/context/LanguageContext";
import { WineStain, GrapeCluster } from "@/components/illustrations";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[55vh] lg:h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920&h=1080&fit=crop')" }} />
        <div className="absolute inset-0 bg-charcoal/25" />
        <div className="relative z-10 text-center text-cream px-4">
          <h1 className="font-caveat text-5xl sm:text-7xl lg:text-9xl leading-[0.95] mb-4 font-normal">Vins Fins</h1>
          <p className="text-xs sm:text-sm text-cream/50 font-light tracking-wider mb-8">{t("home.heroSubtitle")}</p>
          <Link href="/contact#reservation" className="text-[11px] tracking-luxury uppercase text-cream/70 hover:text-cream transition-colors duration-500 border-b border-cream/20 pb-1">{t("home.reserveTable")}</Link>
        </div>
      </section>

      {/* Featured Wines */}
      <section className="relative px-4 sm:px-8 lg:px-20 py-16 sm:py-24 lg:py-40 bg-cream dark:bg-noir">
        <WineStain className="absolute top-8 right-8 text-burgundy opacity-10 hidden lg:block" size={120} />
        <GrapeCluster className="absolute bottom-12 left-4 text-burgundy opacity-10 hidden lg:block" size={80} />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-end justify-between mb-12 sm:mb-20">
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-charcoal dark:text-cream">{t("home.featuredTitle")}</h2>
            <Link href="/wines" className="text-[10px] tracking-luxury uppercase text-charcoal/60 dark:text-cream/60 hover:text-charcoal dark:hover:text-cream transition-colors duration-500">{t("home.viewCollection")}</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-y-16">
            {featuredWines.slice(0, 6).map((wine) => (
              <div key={wine.id} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img src={wine.image} alt={wine.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                </div>
                <p className="text-[10px] uppercase tracking-luxury text-charcoal/80 dark:text-cream/60 mb-2">{wine.region}</p>
                <h3 className="font-playfair text-lg mb-1 text-charcoal dark:text-cream">{wine.name}</h3>
                <div className="flex items-center gap-3 text-xs text-charcoal/70 dark:text-cream/60">
                  <span>€{wine.priceGlass} / {t("home.glass")}</span>
                  <span className="text-charcoal/70 dark:text-cream/40">·</span>
                  <span>€{wine.priceBottle} / {t("home.bottle")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 text-center px-4 bg-cream dark:bg-noir">
        <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl mb-4 text-charcoal dark:text-cream">{t("home.ctaTitle")}</h2>
        <p className="text-xs text-charcoal/60 dark:text-cream/60 mb-8 max-w-sm mx-auto font-light leading-relaxed">{t("home.ctaDesc")}</p>
        <Link href="/contact#reservation" className="text-[11px] tracking-luxury uppercase text-red-700 dark:text-red-500 hover:text-red-900 dark:hover:text-red-400 border-b border-red-700/30 dark:border-red-500/30 pb-1 transition-colors duration-500">{t("home.ctaButton")}</Link>
      </section>
    </>
  );
}
