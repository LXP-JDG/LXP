import Link from "next/link";
import type { CourseSummary } from "@/lib/api/courses";

type CourseCardProps = {
  course: CourseSummary;
};

export default function CourseCard({ course }: CourseCardProps) {
  const isPublic = course.status === "PUBLIC";

  return (
    <Link href={`/courses/${course.courseId}`} className="block h-full">
      <article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-shadow group h-full">
        <div className="relative h-40 w-full overflow-hidden bg-surface-container-high">
          {course.thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={course.thumbnailUrl}
              alt={course.title}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface-variant text-5xl">
                play_lesson
              </span>
            </div>
          )}
          {!isPublic && (
            <span className="absolute top-2 right-2 bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide border border-outline-variant">
              비공개
            </span>
          )}
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h4 className="text-lg font-semibold text-on-surface mb-3 line-clamp-2 leading-snug">
            {course.title}
          </h4>
          <div className="mt-auto flex items-center gap-2 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">person</span>
            <span>강사 #{course.instructorId}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
