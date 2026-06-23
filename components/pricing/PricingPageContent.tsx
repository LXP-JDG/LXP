import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import PricingCard from "@/components/pricing/PricingCard";
import {
  mockPricingPlans,
  pricingPageMeta,
} from "@/data/mockPricingPageData";

export default function PricingPageContent() {
  return (
    <>
      <TopNavBar />
      <main className="grow flex flex-col items-center w-full">
        <section className="w-full max-w-container-max px-4 md:px-margin-desktop pt-24 pb-16 text-center flex flex-col items-center">
          <h1 className="text-3xl md:text-[48px] font-bold text-on-background mb-4 tracking-tight">
            {pricingPageMeta.title}
          </h1>
          <p className="text-base text-secondary max-w-2xl mb-12">
            {pricingPageMeta.subtitle}
          </p>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {mockPricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
