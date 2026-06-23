import { testimonials } from "@/data/mockHomePageData";

function StarRating() {
  return (
    <div className="flex text-[#fbbc04] mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined material-symbols-filled"
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 md:px-margin-desktop bg-white">
      <div className="max-w-container-max mx-auto">
        <h2 className="text-3xl md:text-[32px] font-bold text-on-surface text-center mb-12 tracking-tight">
          학습자들의 이야기
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {testimonials.map((testimonial) =>
            testimonial.featured ? (
              <div
                key={testimonial.author}
                className="bg-[#FFF7ED] rounded-xl p-8 border border-[#FDBA74] relative md:-translate-y-4 shadow-lg"
              >
                <StarRating />
                <p className="text-base text-[#2c1511] mb-6 leading-relaxed font-semibold">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-[#5c352d]">
                  {testimonial.author}
                </p>
              </div>
            ) : (
              <div
                key={testimonial.author}
                className="bg-[#f8f9ff] rounded-xl p-8 border border-[#E2E8F0]"
              >
                <StarRating />
                <p className="text-base text-on-surface mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-on-surface-variant">
                  {testimonial.author}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
