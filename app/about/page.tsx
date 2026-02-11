"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const team = [
    { name: "Marc Duval", roleKey: "marcRole", bioKey: "marcBio", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" },
    { name: "Sophie Laurent", roleKey: "sophieRole", bioKey: "sophieBio", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop" },
    { name: "Thomas Weber", roleKey: "thomasRole", bioKey: "thomasBio", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop" },
  ];

  return (
    <div>
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=1920&h=600&fit=crop')" }} />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center text-cream px-4 sm:px-6">
          <p className="uppercase tracking-luxury text-gold/70 text-[11px] mb-4 sm:mb-6">{t("about.heroLabel")}</p>
          <h1 className="font-playfair text-3xl sm:text-5xl lg:text-7xl font-normal">{t("about.heroTitle")}</h1>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-20 py-16 sm:py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-24 lg:mb-32">
            <div className="lg:col-span-5 lg:pr-8">
              <p className="uppercase tracking-luxury text-gold text-[11px] mb-4 sm:mb-6">{t("about.estLabel")}</p>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-5xl mb-6 sm:mb-8 leading-tight">{t("about.passionTitle")}</h2>
              <p className="text-charcoal/45 leading-[1.9] mb-5 font-light text-sm sm:text-base">{t("about.passionP1")}</p>
              <p className="text-charcoal/45 leading-[1.9] mb-5 font-light text-sm sm:text-base">{t("about.passionP2")}</p>
              <p className="text-charcoal/45 leading-[1.9] font-light text-sm sm:text-base">{t("about.passionP3")}</p>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <div className="aspect-[4/5] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=600&h=750&fit=crop" alt="Wine cellar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-24 lg:mb-32">
            <div className="lg:col-span-7 lg:pr-12 order-2 lg:order-1">
              <div className="aspect-[4/5] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560148218-1a83060f7b32?w=600&h=750&fit=crop" alt="Natural winemaking" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <p className="uppercase tracking-luxury text-sage text-[11px] mb-4 sm:mb-6">{t("about.philoLabel")}</p>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-5xl mb-6 sm:mb-8 leading-tight">{t("about.philoTitle")}</h2>
              <p className="text-charcoal/45 leading-[1.9] mb-5 font-light text-sm sm:text-base">{t("about.philoP1")}</p>
              <p className="text-charcoal/45 leading-[1.9] mb-5 font-light text-sm sm:text-base">{t("about.philoP2")}</p>
              <p className="text-charcoal/45 leading-[1.9] font-light text-sm sm:text-base">{t("about.philoP3")}</p>
            </div>
          </div>

          <div className="text-center mb-10 sm:mb-16">
            <p className="uppercase tracking-luxury text-gold text-[11px] mb-4 sm:mb-6">{t("about.teamLabel")}</p>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-5xl">{t("about.teamTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12 mb-16 sm:mb-24 lg:mb-32">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-[4/5] overflow-hidden mb-4 sm:mb-6">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl mb-2">{member.name}</h3>
                <p className="text-[11px] uppercase tracking-luxury text-gold/70 mb-3 sm:mb-4">{t(`about.${member.roleKey}`)}</p>
                <p className="text-charcoal/40 text-sm font-light leading-relaxed">{t(`about.${member.bioKey}`)}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-charcoal/5">
            {[
              { titleKey: "valuesNatural", descKey: "valuesNaturalDesc" },
              { titleKey: "valuesCommunity", descKey: "valuesCommunityDesc" },
              { titleKey: "valuesTerroirFirst", descKey: "valuesTerroirDesc" },
            ].map((v) => (
              <div key={v.titleKey} className="bg-cream p-8 sm:p-12 lg:p-16 text-center">
                <h3 className="font-playfair text-lg sm:text-xl mb-3 sm:mb-4">{t(`about.${v.titleKey}`)}</h3>
                <p className="text-charcoal/40 text-sm font-light leading-relaxed">{t(`about.${v.descKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal" />
        <div className="relative z-10 text-center text-cream px-4 sm:px-6">
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6">{t("about.ctaTitle")}</h2>
          <p className="text-cream/35 mb-8 sm:mb-12 max-w-md mx-auto font-light leading-relaxed text-sm sm:text-base">{t("about.ctaDesc")}</p>
          <Link href="/contact#reservation" className="border border-cream/30 text-cream px-10 sm:px-14 py-4 text-[11px] tracking-luxury uppercase hover:bg-cream hover:text-charcoal transition-all duration-700 inline-block">{t("about.ctaButton")}</Link>
        </div>
      </section>
    </div>
  );
}
