import Link from "next/link";
import type { CourseDetail } from "@/data/mockCourseDetailData";

type CurriculumSidebarProps = {
  courseId: string;
  curriculum: CourseDetail["curriculum"];
  activeItemId: string;
  onSelectItem: (id: string) => void;
};

export default function CurriculumSidebar({
  courseId,
  curriculum,
  activeItemId,
  onSelectItem,
}: CurriculumSidebarProps) {
  return (
    <aside className="hidden lg:block w-60 shrink-0 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-hide">
      <div className="space-y-6">
        {curriculum.map((week) => (
          <div key={week.week}>
            <h3 className="text-xs font-semibold text-secondary mb-3 uppercase tracking-wide">
              {week.week}
            </h3>
            <ul className="space-y-1">
              {week.items.map((item) => {
                const isActive = item.id === activeItemId;
                const itemClassName = `w-full flex items-start gap-3 py-2 px-3 rounded-lg text-sm transition-colors text-left border-l-4 ${
                  isActive
                    ? "bg-surface-container-low border-primary-container text-on-primary-fixed-variant font-medium"
                    : "text-secondary hover:bg-surface-container-low border-transparent"
                }`;

                const content = (
                  <>
                    {item.type === "lecture" ? (
                      <span className="material-symbols-outlined text-[18px] mt-0.5 shrink-0">
                        play_circle
                      </span>
                    ) : item.completed ? (
                      <span className="material-symbols-outlined material-symbols-filled text-[18px] text-primary-container shrink-0">
                        check_circle
                      </span>
                    ) : (
                      <span className="material-symbols-outlined text-[18px] shrink-0">
                        assignment
                      </span>
                    )}
                    <span className="flex-1 min-w-0">
                      {item.title}
                      {item.type === "lecture" && item.duration && (
                        <>
                          <br />
                          <span className="text-xs text-secondary font-code">
                            {item.duration}
                          </span>
                        </>
                      )}
                    </span>
                  </>
                );

                return (
                  <li key={item.id}>
                    {item.type === "lecture" ? (
                      <Link
                        href={`/courses/${courseId}/learn/${item.id}`}
                        className={itemClassName}
                      >
                        {content}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onSelectItem(item.id)}
                        className={itemClassName}
                      >
                        {content}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
