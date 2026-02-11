"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-cream dark:bg-noir min-h-screen">
      <section className="px-4 sm:px-8 lg:px-20 py-12 sm:py-20 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-2xl sm:text-3xl mb-8 text-charcoal dark:text-cream">{t("cart.title")}</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xs text-charcoal/60 dark:text-cream/60 font-light mb-6">{t("cart.empty")}</p>
              <Link href="/shop" className="btn-primary dark:bg-cream dark:text-charcoal dark:hover:bg-cream/80">{t("cart.continueShopping")}</Link>
            </div>
          ) : (
            <>
              <div className="space-y-0">
                {items.map((item) => (
                  <div key={item.wine.id} className="flex items-center gap-4 sm:gap-6 py-5 border-b border-charcoal/5 dark:border-cream/10">
                    <div className="w-14 h-18 flex-shrink-0 overflow-hidden">
                      <img src={item.wine.image} alt={item.wine.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-playfair text-sm text-charcoal dark:text-cream">{item.wine.name}</h3>
                      <p className="text-[10px] text-charcoal/60 dark:text-cream/50">{item.wine.vintage} · {item.wine.region}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.wine.id, item.quantity - 1)} className="w-7 h-7 border border-charcoal/10 dark:border-cream/20 flex items-center justify-center text-xs text-charcoal dark:text-cream">−</button>
                      <span className="text-xs w-4 text-center text-charcoal dark:text-cream">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.wine.id, item.quantity + 1)} className="w-7 h-7 border border-charcoal/10 dark:border-cream/20 flex items-center justify-center text-xs text-charcoal dark:text-cream">+</button>
                    </div>
                    <span className="text-sm w-16 text-right text-charcoal dark:text-cream">€{(item.wine.priceShop * item.quantity).toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.wine.id)} className="text-charcoal/80 dark:text-cream/50 hover:text-charcoal dark:hover:text-cream text-[10px] tracking-wider uppercase min-w-[44px] min-h-[44px] flex items-center justify-center">{t("cart.remove")}</button>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-charcoal/5 dark:border-cream/10">
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-[10px] uppercase tracking-luxury text-charcoal/60 dark:text-cream/60">{t("cart.total")}</span>
                  <span className="font-playfair text-xl text-charcoal dark:text-cream">€{(totalPrice + (totalPrice >= 100 ? 0 : 9.9)).toFixed(2)}</span>
                </div>
                <div className="flex gap-4">
                  <Link href="/shop/checkout" className="btn-primary text-center flex-1 dark:bg-cream dark:text-charcoal dark:hover:bg-cream/80">{t("cart.checkout")}</Link>
                  <button onClick={clearCart} className="btn-outline dark:border-cream/20 dark:text-cream dark:hover:border-cream/40">{t("cart.clearCart")}</button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
