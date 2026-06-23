import { statistics } from "@/data/mockHomePageData";

export default function StatisticsBand() {
  return (
    <section className="py-24 px-4 md:px-margin-desktop bg-[#E8F4FF] border-y border-outline-variant">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-outline-variant">
          {statistics.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center ${index > 0 ? "pt-8 md:pt-0" : "pt-4 md:pt-0"}`}
            >
              <span className="material-symbols-outlined text-3xl text-[#0b1c30] mb-4">
                {stat.icon}
              </span>
              <div className="font-code text-4xl md:text-[48px] font-bold text-black mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-base text-on-surface-variant">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
