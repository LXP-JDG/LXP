import type { CourseDetail } from "@/data/mockCourseDetailData";

type CourseDetailHeaderProps = {
  course: CourseDetail;
};

export default function CourseDetailHeader({ course }: CourseDetailHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="bg-surface-container-highest text-secondary px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
          {course.category}
        </span>
        <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
          {course.difficulty}
        </span>
      </div>

      <h1 className="text-3xl md:text-[48px] font-bold text-on-surface mb-6 leading-tight tracking-tight">
        {course.title}
      </h1>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 font-code text-sm text-secondary">
        <span className="flex items-center gap-1 text-on-surface font-medium">
          <span className="material-symbols-outlined material-symbols-filled text-[18px] text-primary">
            star
          </span>
          {course.rating} ({course.reviewCount})
        </span>
        <span>·</span>
        <span>수강생 {course.students.toLocaleString()}명</span>
        <span>·</span>
        <span>강의 {course.lectureCount}개</span>
        <span>·</span>
        <span>미션 {course.missionCount}개</span>
      </div>

      <div className="flex items-center gap-4 p-4 rounded-xl border border-secondary-container bg-surface-container-lowest">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-12 h-12 rounded-full object-cover shrink-0"
          src={course.instructor.avatar}
          alt={course.instructor.name}
        />
        <div>
          <div className="text-base font-semibold text-on-surface">
            {course.instructor.name}
          </div>
          <div className="text-sm text-secondary">{course.instructor.role}</div>
        </div>
      </div>
    </div>
  );
}
