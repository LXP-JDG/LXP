import type { LessonDetail } from "@/data/mockCoursePlayerData";

type LessonDetailsProps = {
  lesson: LessonDetail;
};

export default function LessonDetails({ lesson }: LessonDetailsProps) {
  return (
    <div className="bg-surface-container-lowest rounded-lg border border-secondary-container p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {lesson.badges.map((badge) => (
          <span
            key={badge}
            className="px-2 py-1 bg-surface-container-high text-on-surface-variant text-xs font-semibold tracking-wide uppercase rounded"
          >
            {badge}
          </span>
        ))}
        {lesson.premium && (
          <span className="px-2 py-1 bg-primary-container/20 text-on-primary-container text-xs font-semibold tracking-wide uppercase rounded flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">star</span>
            Premium
          </span>
        )}
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-on-surface mb-4 leading-tight">
        {lesson.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-secondary text-sm pb-6 border-b border-secondary-container mb-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">person</span>
          <span>{lesson.instructor}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">
            calendar_today
          </span>
          <span>업데이트: {lesson.updatedAt}</span>
        </div>
      </div>

      <div className="text-on-surface text-base leading-relaxed space-y-4">
        <p>{lesson.description}</p>
        <div>
          <h4 className="font-bold mt-6 mb-2">이 강의에서 배울 내용:</h4>
          <ul className="list-disc pl-5 space-y-2 text-secondary">
            {lesson.objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
