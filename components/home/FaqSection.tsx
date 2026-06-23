import { faqItems } from "@/data/mockHomePageData";

export default function FaqSection() {
  return (
    <section className="py-24 px-4 md:px-margin-desktop bg-surface border-y border-[#E2E8F0]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-[32px] font-bold text-on-surface text-center mb-12 tracking-tight">
          자주 묻는 질문
        </h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group bg-white rounded-xl border border-[#E2E8F0] p-6 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-lg font-semibold text-on-surface">
                {item.question}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-base text-on-surface-variant">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
