import { heroData } from "@/data/mockHomePageData";

export default function HeroSection() {
  const titleLines = heroData.title.split("\n");

  return (
    <section className="relative pt-[120px] pb-24 px-4 md:px-margin-desktop overflow-hidden bg-gradient-to-b from-[#E8F4FF] to-[#FFF9F0]">
      <div className="max-w-container-max mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-[72px] font-bold leading-[1.1] tracking-[-2px] text-on-surface mb-6">
          {titleLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          {heroData.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <button
            type="button"
            className="bg-[#0b1c30] text-white text-base font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-sm"
          >
            {heroData.primaryCta}
          </button>
          <button
            type="button"
            className="bg-transparent border border-outline text-on-surface text-base font-semibold px-8 py-4 rounded-full hover:bg-surface-container-low transition-colors"
          >
            {heroData.secondaryCta}
          </button>
        </div>

        <div className="relative mx-auto max-w-5xl rounded-xl bg-white border border-[#E2E8F0] shadow-2xl overflow-hidden">
          <div className="h-12 bg-white border-b border-[#E2E8F0] flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-error" />
            <div className="w-3 h-3 rounded-full bg-[#fbbc04]" />
            <div className="w-3 h-3 rounded-full bg-primary-container" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-auto object-cover aspect-video"
            src={heroData.previewImage.src}
            alt={heroData.previewImage.alt}
          />
        </div>
      </div>
    </section>
  );
}
