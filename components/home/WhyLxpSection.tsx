import { whyLxpFeatures } from "@/data/mockHomePageData";

export default function WhyLxpSection() {
  return (
    <section className="py-24 px-4 md:px-margin-desktop bg-[#f4fbf9]">
      <div className="max-w-container-max mx-auto">
        <h2 className="text-3xl md:text-[32px] font-bold text-on-surface text-center mb-12 tracking-tight">
          왜 LXP일까요
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {whyLxpFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl border border-[#E2E8F0] p-8 flex gap-4"
            >
              <div className="shrink-0 text-primary-container mt-1">
                <span className="material-symbols-outlined text-2xl">
                  check_circle
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-on-surface mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-on-surface-variant">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
