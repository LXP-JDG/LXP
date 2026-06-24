"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import DashboardStats from "@/components/instructor/DashboardStats";
import {
  instructorCoursesPageMeta,
} from "@/data/mockInstructorDashboardData";
import {
  getCourses,
  publishCourse,
  unpublishCourse,
  createCourse,
  type CourseSummary,
} from "@/lib/api/courses";
import { ApiError } from "@/lib/api";

type CreateCourseForm = {
  title: string;
  description: string;
  thumbnailUrl: string;
};

export default function CourseTable() {
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createForm, setCreateForm] = useState<CreateCourseForm>({
    title: "",
    description: "",
    thumbnailUrl: "",
  });
  const [creating, setCreating] = useState(false);

  const loadCourses = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getCourses({ size: 50 });
      setCourses(result.courses);
    } catch {
      // 로드 실패 시 빈 목록 유지
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return courses;
    const q = searchQuery.trim().toLowerCase();
    return courses.filter((c) => c.title.toLowerCase().includes(q));
  }, [courses, searchQuery]);

  const handlePublish = async (courseId: number) => {
    setActionError(null);
    try {
      await publishCourse(courseId);
      setCourses((prev) =>
        prev.map((c) => (c.courseId === courseId ? { ...c, status: "PUBLIC" as const } : c)),
      );
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "공개 처리 중 오류가 발생했습니다.");
    }
  };

  const handleUnpublish = async (courseId: number) => {
    setActionError(null);
    try {
      await unpublishCourse(courseId);
      setCourses((prev) =>
        prev.map((c) => (c.courseId === courseId ? { ...c, status: "PRIVATE" as const } : c)),
      );
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "비공개 처리 중 오류가 발생했습니다.");
    }
  };

  const handleCreate = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!createForm.title || !createForm.description) return;

    setCreating(true);
    setActionError(null);
    try {
      await createCourse({
        title: createForm.title,
        description: createForm.description,
        thumbnailUrl: createForm.thumbnailUrl || undefined,
      });
      setShowCreateModal(false);
      setCreateForm({ title: "", description: "", thumbnailUrl: "" });
      await loadCourses();
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "강좌 생성 중 오류가 발생했습니다.");
    } finally {
      setCreating(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
        <div>
          <h1 className="text-3xl md:text-[48px] font-bold text-on-surface mb-2 tracking-tight">
            {instructorCoursesPageMeta.title}
          </h1>
          <p className="text-base text-on-surface-variant">{instructorCoursesPageMeta.subtitle}</p>
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
          <button
            type="button"
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2 bg-on-surface text-surface-container-lowest rounded-lg text-sm font-semibold hover:bg-on-surface-variant transition-colors shrink-0"
          >
            + 새 강좌
          </button>
        </div>
      </div>

      <DashboardStats />

      {actionError && (
        <div className="bg-error-container/20 border border-error/30 rounded-lg px-4 py-3 text-sm text-error">
          {actionError}
        </div>
      )}

      <div className="rounded-xl overflow-hidden flex flex-col bg-surface-container-lowest/80 backdrop-blur-md border border-tertiary-fixed">
        <div className="px-6 py-4 border-b border-tertiary-fixed flex justify-between items-center bg-surface">
          <h3 className="text-base font-semibold text-on-surface">
            {instructorCoursesPageMeta.tableTitle}
          </h3>
          {loading && (
            <span className="material-symbols-outlined animate-spin text-on-surface-variant">
              progress_activity
            </span>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-tertiary-fixed text-xs font-semibold text-on-surface-variant tracking-wide uppercase">
                <th className="px-6 py-4 font-normal">강좌명</th>
                <th className="px-6 py-4 font-normal">상태</th>
                <th className="px-6 py-4 font-normal text-right">관리</th>
              </tr>
            </thead>
            <tbody className="text-sm text-on-surface divide-y divide-tertiary-fixed/50">
              {filteredCourses.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-12 text-center text-on-surface-variant">
                    {loading ? "불러오는 중..." : searchQuery ? "검색 결과가 없습니다." : "강좌가 없습니다."}
                  </td>
                </tr>
              ) : (
                filteredCourses.map((course) => (
                  <tr
                    key={course.courseId}
                    className="hover:bg-surface-container-low transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
                          <span className="material-symbols-outlined">play_lesson</span>
                        </div>
                        <div>
                          <p className="font-bold text-on-surface">{course.title}</p>
                          <p className="text-on-surface-variant text-xs mt-0.5">
                            강좌 #{course.courseId}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={
                          course.status === "PUBLIC"
                            ? "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-surface-container-highest text-primary-fixed-dim border border-primary-fixed/20"
                            : "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-surface-container text-on-surface-variant border border-tertiary-fixed"
                        }
                      >
                        {course.status === "PUBLIC" ? "공개" : "비공개"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                        {course.status === "PRIVATE" ? (
                          <button
                            type="button"
                            onClick={() => handlePublish(course.courseId)}
                            className="bg-primary text-on-primary text-xs px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
                          >
                            공개
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleUnpublish(course.courseId)}
                            className="bg-surface-container text-on-surface-variant text-xs px-3 py-1 rounded-full hover:bg-surface-container-high transition-colors"
                          >
                            비공개
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 강좌 생성 모달 */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-surface rounded-2xl shadow-2xl w-full max-w-md p-8">
            <h3 className="text-xl font-bold mb-6">새 강좌 만들기</h3>
            <form onSubmit={handleCreate} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-on-surface">강좌 제목 *</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={createForm.title}
                  onChange={(e) => setCreateForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="강좌 제목을 입력하세요"
                  className="h-11 px-4 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:border-primary-container text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-on-surface">강좌 설명 *</label>
                <textarea
                  required
                  maxLength={4096}
                  value={createForm.description}
                  onChange={(e) => setCreateForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="강좌 설명을 입력하세요"
                  className="h-28 px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:border-primary-container text-sm resize-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-on-surface">썸네일 URL (선택)</label>
                <input
                  type="text"
                  value={createForm.thumbnailUrl}
                  onChange={(e) => setCreateForm((f) => ({ ...f, thumbnailUrl: e.target.value }))}
                  placeholder="https://..."
                  className="h-11 px-4 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:border-primary-container text-sm"
                />
              </div>

              {actionError && (
                <p className="text-sm text-error">{actionError}</p>
              )}

              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => { setShowCreateModal(false); setActionError(null); }}
                  className="flex-1 py-2.5 border border-outline-variant rounded-full text-sm text-on-surface-variant hover:bg-surface-container transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="flex-1 py-2.5 bg-on-surface text-surface-container-lowest rounded-full text-sm font-bold hover:bg-on-surface-variant transition-colors disabled:opacity-60 flex items-center justify-center"
                >
                  {creating ? (
                    <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                  ) : (
                    "생성하기"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
