import Link from "next/link";
import type { MockCourse } from "@/data/mockCoursesPageData";

type CourseCardProps = {
  course: MockCourse;
};

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const isBeginner = difficulty === "입문";

  return (
    <span
      className={
        isBeginner
          ? "bg-primary-container text-on-primary-container px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide"
          : "bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide"
      }
    >
      {difficulty}
    </span>
  );
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`} className="block h-full">
    <article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-shadow group h-full">
      <div className="relative h-40 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={course.image}
          alt={course.title}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-outline text-xs font-semibold uppercase tracking-wide">
            {course.category}
          </span>
          <DifficultyBadge difficulty={course.difficulty} />
        </div>
        <h4 className="text-lg font-semibold text-on-surface mb-2 line-clamp-2 leading-snug">
          {course.title}
        </h4>
        <p className="text-sm text-on-surface-variant mb-4 line-clamp-1">
          {course.description}
        </p>
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-surface-container-high overflow-hidden shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                src={course.instructorAvatar}
                alt={course.instructor}
              />
            </div>
            <span className="text-sm text-on-surface-variant">
              {course.instructor}
            </span>
          </div>
          <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-3">
            <div className="flex items-center text-on-surface">
              <span className="material-symbols-outlined material-symbols-filled text-[#F59E0B] text-sm mr-1">
                star
              </span>
              <span className="font-code text-sm">{course.rating}</span>
              <span className="font-code text-sm text-outline ml-1">
                ({course.reviewCount.toLocaleString()})
              </span>
            </div>
            <div className="flex items-center text-outline">
              <span className="material-symbols-outlined text-sm mr-1">
                group
              </span>
              <span className="font-code text-sm">
                {course.students.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
}
