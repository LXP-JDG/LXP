import Link from "next/link";
import type { PricingPlan } from "@/data/mockPricingPageData";

type PricingCardProps = {
  plan: PricingPlan;
};

export default function PricingCard({ plan }: PricingCardProps) {
  if (plan.featured) {
    return (
      <div className="flex flex-col bg-white border-2 border-primary-container rounded-xl p-8 relative shadow-[0_10px_40px_-10px_rgba(0,212,164,0.15)] md:-translate-y-4">
        {plan.badge && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container text-on-primary-container text-xs font-semibold tracking-wide uppercase px-4 py-1 rounded-full whitespace-nowrap">
            {plan.badge}
          </div>
        )}
        <h3 className="text-2xl font-semibold text-on-background mb-2">
          {plan.name}
        </h3>
        <p className="text-sm text-secondary mb-6">{plan.description}</p>
        <div className="mb-8 flex items-end gap-1">
          <span className="font-code text-4xl font-bold text-on-background">
            {plan.price}
          </span>
          <span className="text-sm text-secondary pb-1">{plan.period}</span>
        </div>
        <ul className="space-y-4 mb-8 grow">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-lg shrink-0">
                check_circle
              </span>
              <span className="text-sm text-on-surface-variant">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href={plan.ctaHref}
          className="w-full py-3 rounded-full bg-on-background text-white text-sm font-medium hover:opacity-90 transition-opacity text-center"
        >
          {plan.ctaLabel}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white border border-secondary-container rounded-xl p-8 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-all">
      <h3 className="text-2xl font-semibold text-on-background mb-2">
        {plan.name}
      </h3>
      <p className="text-sm text-secondary mb-6">{plan.description}</p>
      <div className="mb-8 flex items-end gap-1">
        <span className="font-code text-3xl font-bold text-on-background">
          {plan.price}
        </span>
        <span className="text-sm text-secondary pb-1">{plan.period}</span>
      </div>
      <ul className="space-y-4 mb-8 grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-secondary-fixed-dim text-lg shrink-0">
              check
            </span>
            <span className="text-sm text-on-surface-variant">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={plan.ctaHref}
        className="w-full py-3 rounded-full border border-outline bg-white text-on-background text-sm font-medium hover:bg-surface transition-colors text-center"
      >
        {plan.ctaLabel}
      </Link>
    </div>
  );
}
