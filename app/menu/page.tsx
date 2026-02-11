"use client";

import { menuSections, seasonalSpecials } from "@/data/menu";
import { useLanguage } from "@/context/LanguageContext";
import { WineGlass, Corkscrew } from "@/components/illustrations";

export default function MenuPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-cream dark:bg-noir">
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop')" }} />
        <div className="absolute inset-0 bg-charcoal/25" />
        <div className="relative z-10 text-center text-cream">
          <h1 className="font-caveat text-4xl sm:text-6xl lg:text-7xl font-normal">{t("menuPage.heroTitle")}</h1>
        </div>
      </section>

      <section className="relative px-4 sm:px-8 py-16 sm:py-24 lg:py-40">
        <WineGlass className="absolute top-20 left-6 text-burgundy opacity-10 hidden lg:block" size={70} />
        <Corkscrew className="absolute bottom-32 right-10 text-gold opacity-10 hidden lg:block" size={60} />
        <div className="max-w-2xl mx-auto text-center">
          {menuSections.map((section, idx) => (
            <div key={section.title} className="mb-16 sm:mb-24">
              <h2 className="font-playfair text-xl sm:text-2xl lg:text-3xl mb-8 sm:mb-12 text-charcoal dark:text-cream">{section.title}</h2>
              <div className="space-y-6 sm:space-y-8">
                {section.items.map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="flex items-baseline justify-center gap-3">
                      <h4 className="font-playfair text-sm sm:text-base text-charcoal dark:text-cream">{item.name}</h4>
                      <span className="text-xs text-charcoal/60 dark:text-cream/60 font-light">€{item.price}</span>
                    </div>
                    <p className="text-xs text-charcoal/60 dark:text-cream/50 mt-1 font-light">{item.description}</p>
                    {item.winePairing && <p className="text-[10px] text-burgundy/40 dark:text-burgundy/60 mt-1 font-light italic">{item.winePairing}</p>}
                  </div>
                ))}
              </div>
              {idx < menuSections.length - 1 && (
                <div className="mt-12 sm:mt-16 flex justify-center">
                  <div className="w-8 h-px bg-charcoal/10 dark:bg-cream/10" />
                </div>
              )}
            </div>
          ))}

          <div className="border-t border-charcoal/5 dark:border-cream/10 pt-8">
            <p className="text-[10px] text-charcoal/80 dark:text-cream/50 font-light tracking-wider">{t("menuPage.menuNote")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
