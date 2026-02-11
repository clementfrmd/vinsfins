import { menuSections, seasonalSpecials } from "@/data/menu";

export const metadata = {
  title: "Menu — Vins Fins | Grund, Luxembourg",
  description: "Seasonal French-inspired cuisine with wine pairing suggestions at Vins Fins.",
};

export default function MenuPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop')" }} />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center text-cream px-6">
          <p className="uppercase tracking-luxury text-gold/70 text-[11px] mb-6">Saisonnier & Inspiré</p>
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">La Carte</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto max-w-3xl">
          {/* Seasonal Specials */}
          <div className="mb-28 border border-charcoal/5 p-10 sm:p-16">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-luxury text-sage mb-4">Édition Limitée</p>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl">{seasonalSpecials.title}</h2>
              <p className="text-charcoal/35 mt-4 font-light">{seasonalSpecials.description}</p>
            </div>
            <div className="space-y-8">
              {seasonalSpecials.items.map((item, i) => (
                <div key={i} className="flex justify-between items-start gap-6">
                  <div>
                    <h4 className="font-playfair text-lg text-burgundy">{item.name}</h4>
                    <p className="text-sm text-charcoal/40 mt-2 font-light leading-relaxed">{item.description}</p>
                  </div>
                  <span className="text-charcoal/60 font-light whitespace-nowrap">€{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Sections */}
          {menuSections.map((section) => (
            <div key={section.title} className="mb-24">
              <div className="text-center mb-14">
                <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl">{section.title}</h2>
                <div className="divider-gold mt-6" />
              </div>
              <div className="space-y-10">
                {section.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h4 className="font-playfair text-lg">{item.name}</h4>
                          {item.isSpecial && (
                            <span className="text-[10px] tracking-luxury uppercase text-sage">
                              Spécial
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-charcoal/40 mt-2 font-light leading-relaxed">{item.description}</p>
                        {item.winePairing && (
                          <p className="text-xs text-burgundy/50 mt-3 font-light italic">
                            Pair with: {item.winePairing}
                          </p>
                        )}
                      </div>
                      <span className="text-charcoal/60 text-lg font-light whitespace-nowrap">€{item.price}</span>
                    </div>
                    <div className="border-b border-charcoal/5 mt-8" />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center py-12 border-t border-charcoal/5">
            <p className="text-charcoal/30 text-xs font-light leading-relaxed tracking-wide">
              All prices include VAT. Please inform us of any allergies or dietary requirements.
              <br />
              Our team is happy to suggest wine pairings for every dish.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
