import { mockMyCourses, myPageSectionTitles } from "@/data/mockMyPageData";

export default function MyCoursesSection() {
  return (
    <section
      id="courses"
      className="bg-surface-container-lowest border border-[#E2E8F0] rounded-xl p-6 md:p-8 scroll-mt-24"
    >
      <h3 className="text-2xl font-semibold text-on-surface mb-6 border-b border-[#E2E8F0] pb-4">
        {myPageSectionTitles.courses}
      </h3>

      <div className="space-y-4">
        {mockMyCourses.map((course) => (
          <article
            key={course.id}
            className="border border-[#E2E8F0] rounded-xl p-5 hover:shadow-sm transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <h4 className="text-lg font-semibold text-on-surface">
                {course.title}
              </h4>
              <span className="font-code text-sm text-on-surface-variant">
                최근 학습 {course.lastAccessed}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-container rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <span className="font-code text-sm text-on-surface-variant shrink-0">
                {course.progress}%
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
