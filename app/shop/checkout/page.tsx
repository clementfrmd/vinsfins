"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const { t } = useLanguage();
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "collect">("delivery");

  const shipping = deliveryMethod === "collect" ? 0 : (totalPrice >= 100 ? 0 : 9.9);
  const total = totalPrice + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmed");
    clearCart();
  };

  if (step === "confirmed") {
    return (
      <div className="pt-24 px-4 sm:px-8 lg:px-20 py-24 text-center bg-cream dark:bg-noir min-h-screen">
        <h1 className="font-playfair text-2xl sm:text-3xl mb-4 text-charcoal dark:text-cream">{t("checkout.confirmed")}</h1>
        <p className="text-xs text-charcoal/70 dark:text-cream/60 font-light mb-8">{t("checkout.thankYou")}</p>
        <Link href="/shop" className="btn-primary dark:bg-cream dark:text-charcoal dark:hover:bg-cream/80">{t("cart.continueShopping")}</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-24 px-4 sm:px-8 lg:px-20 py-24 text-center bg-cream dark:bg-noir min-h-screen">
        <p className="text-xs text-charcoal/70 dark:text-cream/60 font-light mb-6">{t("checkout.emptyCart")}</p>
        <Link href="/shop" className="btn-primary dark:bg-cream dark:text-charcoal dark:hover:bg-cream/80">{t("checkout.backToShop")}</Link>
      </div>
    );
  }

  const inputClasses = "w-full border-b border-charcoal/10 dark:border-cream/20 bg-transparent px-0 py-3 text-xs font-light text-charcoal dark:text-cream placeholder:text-charcoal/80 dark:placeholder:text-cream/40 focus:outline-none focus:border-charcoal/30 dark:focus:border-cream/50 transition-all duration-300 min-h-[44px]";

  return (
    <div className="pt-24 bg-cream dark:bg-noir min-h-screen">
      <section className="px-4 sm:px-8 lg:px-20 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-2xl sm:text-3xl mb-8 text-charcoal dark:text-cream">{t("checkout.title")}</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="border-t border-charcoal/5 dark:border-cream/10 pt-6 lg:sticky lg:top-24">
                <p className="text-[10px] uppercase tracking-luxury text-charcoal/80 dark:text-cream/50 mb-4">{t("checkout.orderSummary")}</p>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.wine.id} className="flex justify-between text-xs">
                      <span className="text-charcoal/80 dark:text-cream/60 font-light truncate mr-2">{item.wine.name} × {item.quantity}</span>
                      <span className="text-charcoal dark:text-cream">€{(item.wine.priceShop * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-charcoal/5 dark:border-cream/10 pt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-charcoal/60 dark:text-cream/50">{t("checkout.shipping")}</span>
                    <span className="text-charcoal dark:text-cream">{shipping === 0 ? t("checkout.free") : `€${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between items-baseline mt-3">
                    <span className="text-[10px] uppercase tracking-luxury text-charcoal/80 dark:text-cream/50">{t("checkout.total")}</span>
                    <span className="font-playfair text-lg text-charcoal dark:text-cream">€{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-luxury text-charcoal/80 dark:text-cream/50 mb-4">{t("checkout.contactInfo")}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
                  <input required placeholder={t("checkout.firstName")} className={inputClasses} />
                  <input required placeholder={t("checkout.lastName")} className={inputClasses} />
                  <input required type="email" placeholder={t("checkout.email")} className={`sm:col-span-2 ${inputClasses}`} />
                  <input required type="tel" placeholder={t("checkout.phone")} className={`sm:col-span-2 ${inputClasses}`} />
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-luxury text-charcoal/80 dark:text-cream/50 mb-4">{t("checkout.deliveryMethod")}</p>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setDeliveryMethod("delivery")} className={`px-4 py-2 text-[10px] tracking-luxury uppercase transition-all duration-300 min-h-[44px] ${deliveryMethod === "delivery" ? "text-charcoal dark:text-cream border-b border-charcoal dark:border-cream" : "text-charcoal/80 dark:text-cream/50"}`}>{t("checkout.delivery")}</button>
                  <button type="button" onClick={() => setDeliveryMethod("collect")} className={`px-4 py-2 text-[10px] tracking-luxury uppercase transition-all duration-300 min-h-[44px] ${deliveryMethod === "collect" ? "text-charcoal dark:text-cream border-b border-charcoal dark:border-cream" : "text-charcoal/80 dark:text-cream/50"}`}>{t("checkout.clickCollect")}</button>
                </div>
              </div>

              {deliveryMethod === "delivery" ? (
                <div>
                  <p className="text-[10px] uppercase tracking-luxury text-charcoal/80 dark:text-cream/50 mb-4">{t("checkout.shippingAddress")}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
                    <input required placeholder={t("checkout.street")} className={`sm:col-span-2 ${inputClasses}`} />
                    <input required placeholder={t("checkout.city")} className={inputClasses} />
                    <input required placeholder={t("checkout.postalCode")} className={inputClasses} />
                    <select required className={`sm:col-span-2 ${inputClasses}`}>
                      <option value="LU">Luxembourg</option>
                      <option value="BE">Belgium</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-charcoal/70 dark:text-cream/60 font-light">
                  <p>{t("checkout.pickupAt")}: 18 Rue Münster, Grund</p>
                  <p className="mt-1">{t("checkout.pickupHours")}</p>
                </div>
              )}

              <div>
                <p className="text-[10px] uppercase tracking-luxury text-charcoal/80 dark:text-cream/50 mb-4">{t("checkout.payment")}</p>
                <div className="grid grid-cols-1 gap-y-0">
                  <input required placeholder={t("checkout.cardNumber")} className={inputClasses} />
                  <div className="grid grid-cols-2 gap-x-6">
                    <input required placeholder={t("checkout.expiry")} className={inputClasses} />
                    <input required placeholder={t("checkout.cvc")} className={inputClasses} />
                  </div>
                </div>
                <p className="text-[10px] text-charcoal/80 dark:text-cream/40 mt-3 font-light">{t("checkout.paymentNote")}</p>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" required id="age" className="mt-1 min-w-[18px] min-h-[18px]" />
                <label htmlFor="age" className="text-xs text-charcoal/70 dark:text-cream/60 font-light">{t("checkout.ageConfirm")}</label>
              </div>

              <button type="submit" className="btn-primary w-full text-center py-4 dark:bg-cream dark:text-charcoal dark:hover:bg-cream/80">
                {t("checkout.placeOrder")} — €{total.toFixed(2)}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
