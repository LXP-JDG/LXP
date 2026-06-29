"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { getCourses, type CourseSummary } from "@/lib/api/courses";
import { coursesPageMeta, sortTabs } from "@/data/mockCoursesPageData";

const PAGE_SIZE = 9;

export default function CoursesPageContent() {
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSort, setActiveSort] = useState("all");
  const [page, setPage] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const keywordRef = useRef("");

  const fetchCourses = useCallback(async (keyword: string, pageNum: number, replace: boolean) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getCourses({ keyword: keyword || undefined, page: pageNum, size: PAGE_SIZE });
      setCourses((prev) => replace ? result.courses : [...prev, ...result.courses]);
      setIsLast(result.last);
      setPage(pageNum);
    } catch {
      setError("강좌 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  }, []);

  // 초기 로드
  useEffect(() => {
    fetchCourses("", 0, true);
  }, [fetchCourses]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    keywordRef.current = value;

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchCourses(keywordRef.current, 0, true);
    }, 400);
  };

  const handleSortChange = (sortId: string) => {
    setActiveSort(sortId);
  };

  const handleLoadMore = () => {
    fetchCourses(searchQuery, page + 1, false);
  };

  // 클라이언트 사이드 정렬 (API 응답에서)
  const sortedCourses = [...courses].sort((a, b) => {
    if (activeSort === "popular") return b.courseId - a.courseId; // ID 역순 = 최근 인기 근사치
    if (activeSort === "newest") return b.courseId - a.courseId;
    return 0;
  });

  return (
    <>
      <TopNavBar />
      <main className="w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-20">
        <header className="text-center mb-20 flex flex-col items-center">
          <h1 className="text-4xl md:text-[48px] font-bold mb-4 text-on-surface tracking-tight">
            {coursesPageMeta.title}
          </h1>
          <p className="text-base text-on-surface-variant mb-8">{coursesPageMeta.subtitle}</p>

          <div className="relative w-full max-w-2xl mb-12">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-xl">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder={coursesPageMeta.searchPlaceholder}
              className="custom-input w-full bg-surface-container-low border border-outline-variant text-on-surface text-base rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary-container transition-shadow placeholder:text-outline"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 bg-surface-container-low p-1 rounded-full border border-outline-variant">
            {sortTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleSortChange(tab.id)}
                className={
                  activeSort === tab.id
                    ? "bg-on-surface text-on-primary px-6 py-2 rounded-full text-sm transition-colors"
                    : "text-on-surface-variant hover:text-on-surface px-6 py-2 rounded-full text-sm transition-colors"
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        {error && (
          <div className="text-center py-12 border border-error/30 rounded-xl bg-error-container/10 mb-8">
            <p className="text-error">{error}</p>
            <button
              type="button"
              onClick={() => fetchCourses(searchQuery, 0, true)}
              className="mt-4 text-sm underline text-on-surface-variant hover:text-on-surface"
            >
              다시 시도
            </button>
          </div>
        )}

        {!error && sortedCourses.length === 0 && !loading && (
          <div className="text-center py-20 border border-outline-variant rounded-xl bg-surface-container-lowest">
            <p className="text-on-surface-variant text-base">
              {searchQuery ? "검색 결과가 없습니다." : "강좌가 없습니다."}
            </p>
          </div>
        )}

        {sortedCourses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCourses.map((course) => (
              <CourseCard key={course.courseId} course={course} />
            ))}
          </div>
        )}

        {loading && (
          <div className="flex justify-center py-12">
            <span className="material-symbols-outlined animate-spin text-on-surface-variant text-3xl">
              progress_activity
            </span>
          </div>
        )}

        {!isLast && !loading && sortedCourses.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="border border-outline text-on-surface text-base px-8 py-3 rounded-full hover:bg-surface-container-low transition-colors"
            >
              {coursesPageMeta.loadMoreLabel}
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
