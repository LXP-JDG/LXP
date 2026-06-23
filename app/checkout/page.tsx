import type { Metadata } from "next";
import CheckoutPageContent from "@/components/checkout/CheckoutPageContent";

export const metadata: Metadata = {
  title: "LXP Checkout",
  description: "LXP 구독 결제 페이지",
};

export default function CheckoutPage() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">
      <CheckoutPageContent />
    </div>
  );
}
