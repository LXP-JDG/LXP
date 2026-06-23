import Link from "next/link";
import { checkoutHeader, checkoutFormLabels } from "@/data/mockCheckoutPageData";

export default function CheckoutHeader() {
  return (
    <header className="w-full h-16 border-b border-secondary-container bg-surface-container-lowest flex items-center justify-between px-4 md:px-margin-desktop sticky top-0 z-50">
      <Link
        href={checkoutHeader.backHref}
        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        <span className="text-sm hidden md:inline">{checkoutFormLabels.backLabel}</span>
      </Link>
      <div className="text-2xl font-bold tracking-tight">{checkoutHeader.logo}</div>
      <div className="flex items-center gap-2 text-secondary">
        <span className="material-symbols-outlined">lock</span>
        <span className="text-sm">{checkoutFormLabels.securePaymentLabel}</span>
      </div>
    </header>
  );
}
