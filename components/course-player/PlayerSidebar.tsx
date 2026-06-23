"use client";

import Link from "next/link";
import type { CoursePlayerData } from "@/data/mockCoursePlayerData";

type PlayerSidebarProps = {
  player: CoursePlayerData;
  activeLessonId: string;
  completedLessons: Set<string>;
  courseId: string;
};

export default function PlayerSidebar({
  player,
  activeLessonId,
  completedLessons,
  courseId,
}: PlayerSidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col w-80 bg-surface-container-lowest border-r border-secondary-container h-[calc(100vh-4rem)] overflow-y-auto shrink-0 z-40 pt-4 sticky top-16">
      <div className="p-6 border-b border-secondary-container sticky top-0 bg-surface-container-lowest z-10">
        <h2 className="text-2xl font-semibold text-on-surface mb-2">
          {player.courseTitle}
        </h2>
        <div className="flex items-center justify-between text-sm text-secondary">
          <span>진도율 {player.progress.percent}%</span>
          <span>
            {player.progress.completed} / {player.progress.total} 완료
          </span>
        </div>
        <div className="w-full bg-secondary-fixed h-1 mt-3 rounded-full overflow-hidden">
          <div
            className="bg-primary-container h-full rounded-full transition-all"
            style={{ width: `${player.progress.percent}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col">
        {player.sections.map((section) => (
          <div key={section.id}>
            <div className="px-6 py-4 bg-surface-bright border-b border-secondary-container text-xs font-semibold text-secondary uppercase tracking-wide">
              {section.title}
            </div>
            {section.lessons.map((lesson) => {
              const isActive = lesson.id === activeLessonId;
              const isCompleted =
                completedLessons.has(lesson.id) || lesson.completed;

              return (
                <Link
                  key={lesson.id}
                  href={`/courses/${courseId}/learn/${lesson.id}`}
                  className={`flex items-start gap-3 px-6 py-4 border-b border-secondary-container transition-colors cursor-pointer ${
                    isActive
                      ? "bg-surface-container-low border-l-4 border-primary-container relative -ml-px"
                      : "hover:bg-surface-container-low opacity-70 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`lxp-checkbox-display mt-1 ${isCompleted ? "is-checked" : ""}`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`text-sm ${
                        isCompleted
                          ? "text-secondary line-through"
                          : isActive
                            ? "font-semibold text-on-surface"
                            : "text-on-surface"
                      }`}
                    >
                      {lesson.title}
                    </span>
                    {isActive ? (
                      <span className="text-xs text-primary mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          play_circle
                        </span>
                        현재 시청 중
                      </span>
                    ) : (
                      <span className="text-xs text-tertiary mt-1">
                        {lesson.duration}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </aside>
  );
}
