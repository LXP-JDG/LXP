"use client";

import { useMemo, useState } from "react";
import DashboardStats from "@/components/instructor/DashboardStats";
import {
  instructorCoursesPageMeta,
  mockInstructorCourses,
} from "@/data/mockInstructorDashboardData";

export default function CourseTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return [...mockInstructorCourses];
    const query = searchQuery.trim().toLowerCase();
    return mockInstructorCourses.filter(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.meta.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
        <div>
          <h1 className="text-3xl md:text-[48px] font-bold text-on-surface mb-2 tracking-tight">
            {instructorCoursesPageMeta.title}
          </h1>
          <p className="text-base text-on-surface-variant">
            {instructorCoursesPageMeta.subtitle}
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative w-full md:w-auto">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={instructorCoursesPageMeta.searchPlaceholder}
              className="pl-10 pr-4 py-2 border border-tertiary-fixed rounded-lg bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent text-sm text-on-surface w-full md:w-64"
            />
          </div>
        </div>
      </div>

      <DashboardStats />

      <div className="rounded-xl overflow-hidden flex flex-col bg-surface-container-lowest/80 backdrop-blur-md border border-tertiary-fixed">
        <div className="px-6 py-4 border-b border-tertiary-fixed flex justify-between items-center bg-surface">
          <h3 className="text-base font-semibold text-on-surface">
            {instructorCoursesPageMeta.tableTitle}
          </h3>
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant text-sm flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">filter_list</span>
            {instructorCoursesPageMeta.filterLabel}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-tertiary-fixed text-xs font-semibold text-on-surface-variant tracking-wide uppercase">
                <th className="px-6 py-4 font-normal">강좌명</th>
                <th className="px-6 py-4 font-normal">상태</th>
                <th className="px-6 py-4 font-normal">수강생</th>
                <th className="px-6 py-4 font-normal">진척도</th>
                <th className="px-6 py-4 font-normal text-right">관리</th>
              </tr>
            </thead>
            <tbody className="text-sm text-on-surface divide-y divide-tertiary-fixed/50">
              {filteredCourses.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-on-surface-variant"
                  >
                    검색 결과가 없습니다.
                  </td>
                </tr>
              ) : (
                filteredCourses.map((course) => (
                  <tr
                    key={course.id}
                    className="hover:bg-surface-container-low transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded bg-surface-container-high flex items-center justify-center shrink-0 ${
                            course.recruiting
                              ? "text-on-surface-variant"
                              : "text-primary"
                          }`}
                        >
                          <span className="material-symbols-outlined">
                            {course.icon}
                          </span>
                        </div>
                        <div>
                          <p
                            className={`font-bold ${
                              course.recruiting
                                ? "text-on-surface-variant"
                                : "text-on-surface"
                            }`}
                          >
                            {course.title}
                          </p>
                          <p className="text-on-surface-variant text-xs mt-0.5">
                            {course.meta}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={
                          course.statusVariant === "active"
                            ? "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-surface-container-highest text-primary-fixed-dim border border-primary-fixed/20"
                            : "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-surface-container text-on-surface-variant border border-tertiary-fixed"
                        }
                      >
                        {course.status}
                      </span>
                    </td>
                    <td
                      className={`px-6 py-4 font-code text-sm ${
                        course.recruiting ? "text-on-surface-variant" : ""
                      }`}
                    >
                      {course.students ?? "-"}
                    </td>
                    <td className="px-6 py-4">
                      {course.progress !== null ? (
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-surface-container h-1.5 rounded-full overflow-hidden w-24">
                            <div
                              className="bg-primary h-full rounded-full"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-on-surface-variant">
                            {course.progressLabel}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                          {course.progressLabel}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                        {!course.recruiting && (
                          <button
                            type="button"
                            className="bg-on-surface text-surface-container-lowest text-xs px-3 py-1 rounded-full hover:bg-on-surface-variant transition-colors inline-flex items-center justify-center"
                          >
                            미션 추가
                          </button>
                        )}
                        <button
                          type="button"
                          className="p-2 rounded-lg hover:bg-surface-container transition-colors text-primary"
                          aria-label="수정"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            edit
                          </span>
                        </button>
                        <button
                          type="button"
                          className="p-2 rounded-lg hover:bg-surface-container transition-colors text-error"
                          aria-label="삭제"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-tertiary-fixed bg-surface-container-lowest flex items-center justify-between">
          <span className="text-xs text-on-surface-variant">
            {instructorCoursesPageMeta.paginationText}
          </span>
          <div className="flex gap-1">
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant opacity-50 cursor-not-allowed"
              disabled
              aria-label="이전 페이지"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant"
              aria-label="다음 페이지"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
