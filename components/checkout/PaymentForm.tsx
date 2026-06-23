"use client";

import { useState } from "react";
import {
  checkoutFormLabels,
  mockCheckoutOrder,
  mockPaymentMethods,
} from "@/data/mockCheckoutPageData";

const inputClassName =
  "w-full border border-outline-variant rounded-lg bg-surface-container-lowest font-code text-sm focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all";

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState(
    mockPaymentMethods.find((m) => m.default)?.id ?? "card",
  );
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-8">
      <h2 className="text-2xl font-bold mb-6">{checkoutFormLabels.paymentTitle}</h2>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {mockPaymentMethods.map((method) => (
            <label key={method.id} className="cursor-pointer relative">
              <input
                type="radio"
                name="payment_method"
                value={method.id}
                checked={paymentMethod === method.id}
                onChange={() => setPaymentMethod(method.id)}
                className="peer sr-only"
              />
              <div className="checkout-payment-option w-full h-full border border-outline-variant rounded-lg p-4 flex flex-col items-center justify-center gap-3 transition-all hover:bg-surface-container-low peer-checked:border-primary-container peer-checked:bg-primary-container/5">
                <span className="material-symbols-outlined text-on-surface">
                  {method.icon}
                </span>
                <span className="text-sm font-semibold text-center text-on-surface">
                  {method.label}
                </span>
                <div className="checkout-radio-inner w-4 h-4 rounded-full border-2 border-outline-variant absolute top-3 right-3 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-surface-container-lowest peer-checked:bg-primary-container" />
                </div>
              </div>
            </label>
          ))}
        </div>

        {paymentMethod === "card" && (
          <div className="flex flex-col gap-5 pt-6 border-t border-secondary-container">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-semibold">
                {checkoutFormLabels.cardInfoTitle}
              </span>
              <span className="material-symbols-outlined text-outline">lock</span>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-secondary tracking-wide uppercase">
                {checkoutFormLabels.cardNumber}
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-tertiary">
                  credit_card
                </span>
                <input
                  type="text"
                  placeholder={checkoutFormLabels.cardNumberPlaceholder}
                  className={`${inputClassName} pl-12 pr-4 py-3`}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-secondary tracking-wide uppercase">
                  {checkoutFormLabels.expiry}
                </label>
                <input
                  type="text"
                  placeholder={checkoutFormLabels.expiryPlaceholder}
                  className={`${inputClassName} px-4 py-3 text-center`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-secondary tracking-wide uppercase">
                  {checkoutFormLabels.cvc}
                </label>
                <div className="relative">
                  <input
                    type="password"
                    maxLength={3}
                    placeholder={checkoutFormLabels.cvcPlaceholder}
                    className={`${inputClassName} px-4 py-3 text-center`}
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-tertiary cursor-pointer hover:text-on-surface">
                    help
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-xs font-semibold text-secondary tracking-wide uppercase">
                {checkoutFormLabels.cardPassword}
              </label>
              <input
                type="password"
                maxLength={2}
                placeholder={checkoutFormLabels.cardPasswordPlaceholder}
                className={`${inputClassName} w-24 px-4 py-3 text-center`}
              />
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-col gap-6">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5 shrink-0">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
                className="peer appearance-none w-5 h-5 border border-outline-variant rounded bg-surface-container-lowest checked:bg-primary-container checked:border-primary-container transition-colors cursor-pointer"
              />
              <span className="material-symbols-outlined absolute text-on-primary-container opacity-0 peer-checked:opacity-100 pointer-events-none text-sm font-bold">
                check
              </span>
            </div>
            <span className="text-sm text-secondary group-hover:text-on-surface transition-colors leading-tight">
              {checkoutFormLabels.termsPrefix}{" "}
              <span className="font-code text-sm font-bold text-on-surface">
                {mockCheckoutOrder.recurringAmount}
              </span>
              이(가) 정기 결제되는 것에 동의하며,{" "}
              <a className="underline hover:text-primary" href="#">
                {checkoutFormLabels.refundPolicyLabel}
              </a>{" "}
              및{" "}
              <a className="underline hover:text-primary" href="#">
                {checkoutFormLabels.termsLabel}
              </a>
              을 확인하였습니다.
            </span>
          </label>

          <button
            type="submit"
            disabled={!agreed}
            className="w-full bg-inverse-surface text-inverse-on-surface rounded-full py-4 text-2xl font-bold text-center hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            <span className="material-symbols-outlined">lock_open</span>
            {checkoutFormLabels.submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
