import { popularCourses } from "@/data/mockHomePageData";

export default function PopularCoursesSection() {
  return (
    <section className="py-24 px-4 md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-[32px] font-bold text-on-surface tracking-tight">
            인기 강좌
          </h2>
          <a
            className="text-base text-on-surface hover:underline flex items-center gap-1"
            href="#"
          >
            전체 보기{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {popularCourses.map((course) => (
            <article
              key={course.title}
              className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="aspect-video bg-surface-container-low overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={course.image.src}
                  alt={course.image.alt}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-on-surface mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-on-surface-variant mb-4">
                  {course.instructor}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#fbbc04]">
                    <span className="material-symbols-outlined material-symbols-filled text-base">
                      star
                    </span>
                    <span className="font-code text-sm text-black font-semibold">
                      {course.rating}
                    </span>
                  </div>
                  <span className="font-code text-xs text-on-surface-variant">
                    {course.students}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
