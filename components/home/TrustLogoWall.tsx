import { trustLogos } from "@/data/mockHomePageData";

export default function TrustLogoWall() {
  return (
    <section className="py-12 px-4 md:px-margin-desktop bg-white border-b border-outline-variant">
      <div className="max-w-container-max mx-auto text-center">
        <p className="text-sm text-on-surface-variant mb-8 uppercase tracking-widest">
          이런 학습자들이 함께하고 있어요
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {trustLogos.map((icon) => (
            <span key={icon} className="material-symbols-outlined text-4xl">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
