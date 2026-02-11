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
      <div className="pt-24 sm:pt-20 section-padding">
        <div className="container-custom mx-auto max-w-2xl text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="font-playfair text-2xl sm:text-3xl lg:text-4xl mb-4">{t("checkout.confirmed")}</h1>
          <p className="text-charcoal/70 mb-2">{t("checkout.thankYou")}</p>
          <p className="text-charcoal/50 text-sm mb-8">{t("checkout.mockNote")}</p>
          <Link href="/shop" className="btn-primary">{t("cart.continueShopping")}</Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-24 sm:pt-20 section-padding text-center">
        <p className="text-charcoal/50 text-lg mb-6">{t("checkout.emptyCart")}</p>
        <Link href="/shop" className="btn-primary">{t("checkout.backToShop")}</Link>
      </div>
    );
  }

  const inputClasses = "w-full border border-charcoal/10 rounded-sm px-4 py-3 text-sm bg-cream/50 font-light text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-burgundy/60 focus:ring-1 focus:ring-burgundy/20 transition-all duration-300 min-h-[44px]";

  return (
    <div className="pt-24 sm:pt-20">
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-5xl">
          <h1 className="font-playfair text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 pt-2 sm:pt-0">{t("checkout.title")}</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="bg-white p-5 sm:p-6 rounded-sm lg:sticky lg:top-24">
                <h2 className="font-playfair text-xl mb-4">{t("checkout.orderSummary")}</h2>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.wine.id} className="flex gap-3">
                      <div className="w-12 h-16 bg-burgundy/5 rounded overflow-hidden flex-shrink-0">
                        <img src={item.wine.image} alt={item.wine.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{item.wine.name}</p>
                        <p className="text-xs text-charcoal/50">{t("checkout.qty")}: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-semibold">€{(item.wine.priceShop * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-charcoal/10 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal/60">{t("checkout.subtotal")}</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/60">{t("checkout.shipping")}</span>
                    <span>{shipping === 0 ? t("checkout.free") : `€${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-charcoal/10 pt-3 mt-2">
                    <div className="flex justify-between items-baseline">
                      <span className="font-playfair text-lg">{t("checkout.total")}</span>
                      <span className="font-playfair text-xl font-bold text-burgundy">€{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Contact */}
              <div className="bg-white p-5 sm:p-6 rounded-sm">
                <h2 className="font-playfair text-xl mb-4">{t("checkout.contactInfo")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required placeholder={t("checkout.firstName")} className={inputClasses} />
                  <input required placeholder={t("checkout.lastName")} className={inputClasses} />
                  <input required type="email" placeholder={t("checkout.email")} className={`sm:col-span-2 ${inputClasses}`} />
                  <input required type="tel" placeholder={t("checkout.phone")} className={`sm:col-span-2 ${inputClasses}`} />
                </div>
              </div>

              {/* Delivery Method */}
              <div className="bg-white p-5 sm:p-6 rounded-sm">
                <h2 className="font-playfair text-xl mb-4">{t("checkout.deliveryMethod")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod("delivery")}
                    className={`p-4 sm:p-5 border rounded-sm text-left transition-all duration-300 ${
                      deliveryMethod === "delivery"
                        ? "border-burgundy bg-burgundy/5 ring-1 ring-burgundy/20"
                        : "border-charcoal/10 hover:border-charcoal/25"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        deliveryMethod === "delivery" ? "border-burgundy" : "border-charcoal/25"
                      }`}>
                        {deliveryMethod === "delivery" && <div className="w-2 h-2 rounded-full bg-burgundy" />}
                      </div>
                      <span className="font-playfair text-base">{t("checkout.delivery")}</span>
                    </div>
                    <p className="text-xs text-charcoal/50 font-light ml-7">{t("checkout.deliveryDesc")}</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod("collect")}
                    className={`p-4 sm:p-5 border rounded-sm text-left transition-all duration-300 ${
                      deliveryMethod === "collect"
                        ? "border-burgundy bg-burgundy/5 ring-1 ring-burgundy/20"
                        : "border-charcoal/10 hover:border-charcoal/25"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        deliveryMethod === "collect" ? "border-burgundy" : "border-charcoal/25"
                      }`}>
                        {deliveryMethod === "collect" && <div className="w-2 h-2 rounded-full bg-burgundy" />}
                      </div>
                      <span className="font-playfair text-base">{t("checkout.clickCollect")}</span>
                    </div>
                    <p className="text-xs text-charcoal/50 font-light ml-7">{t("checkout.clickCollectDesc")}</p>
                  </button>
                </div>
              </div>

              {/* Shipping Address or Pickup Info */}
              {deliveryMethod === "delivery" ? (
                <div className="bg-white p-5 sm:p-6 rounded-sm">
                  <h2 className="font-playfair text-xl mb-4">{t("checkout.shippingAddress")}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input required placeholder={t("checkout.street")} className={`sm:col-span-2 ${inputClasses}`} />
                    <input placeholder={t("checkout.apartment")} className={`sm:col-span-2 ${inputClasses}`} />
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
                <div className="bg-white p-5 sm:p-6 rounded-sm">
                  <div className="border border-burgundy/15 bg-burgundy/5 rounded-sm p-5 sm:p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <svg className="w-5 h-5 text-burgundy mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <div>
                        <h3 className="font-playfair text-lg text-burgundy mb-1">{t("checkout.pickupAt")}</h3>
                        <p className="text-sm text-charcoal/70 font-light">{t("checkout.pickupAddress")}</p>
                      </div>
                    </div>
                    <div className="ml-8 space-y-2">
                      <p className="text-sm text-charcoal/60 font-light flex items-center gap-2">
                        <svg className="w-4 h-4 text-charcoal/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {t("checkout.pickupHours")}
                      </p>
                      <p className="text-sm text-charcoal/60 font-light flex items-center gap-2">
                        <svg className="w-4 h-4 text-charcoal/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        {t("checkout.pickupNote")}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment */}
              <div className="bg-white p-5 sm:p-6 rounded-sm">
                <h2 className="font-playfair text-xl mb-4">{t("checkout.payment")}</h2>
                <div className="grid grid-cols-1 gap-4">
                  <input required placeholder={t("checkout.cardNumber")} className={inputClasses} />
                  <div className="grid grid-cols-2 gap-4">
                    <input required placeholder={t("checkout.expiry")} className={inputClasses} />
                    <input required placeholder={t("checkout.cvc")} className={inputClasses} />
                  </div>
                </div>
                <p className="text-xs text-charcoal/40 mt-4">{t("checkout.paymentNote")}</p>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" required id="age" className="mt-1 min-w-[20px] min-h-[20px]" />
                <label htmlFor="age" className="text-sm text-charcoal/70">{t("checkout.ageConfirm")}</label>
              </div>

              <button type="submit" className="btn-primary w-full text-center text-base sm:text-lg py-4">
                {t("checkout.placeOrder")} — €{total.toFixed(2)}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
