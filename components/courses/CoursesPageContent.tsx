"use client";

import { useMemo, useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import {
  categoryFilters,
  coursesPageMeta,
  difficultyFilters,
  initialSelectedCategories,
  initialSelectedDifficulties,
  mockCourses,
  ratingFilters,
  sortTabs,
} from "@/data/mockCoursesPageData";

const INITIAL_VISIBLE = 6;

export default function CoursesPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSort, setActiveSort] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    ...initialSelectedCategories,
  ]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([
    ...initialSelectedDifficulties,
  ]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const toggleFilter = (
    value: string,
    selected: string[],
    setter: (values: string[]) => void,
  ) => {
    setter(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value],
    );
    setVisibleCount(INITIAL_VISIBLE);
  };

  const activeFilterChips = useMemo(() => {
    const chips: { type: "category" | "difficulty"; id: string; label: string }[] =
      [];

    selectedCategories.forEach((id) => {
      const category = categoryFilters.find((item) => item.id === id);
      if (category) chips.push({ type: "category", id, label: category.label });
    });

    selectedDifficulties.forEach((id) => {
      const difficulty = difficultyFilters.find((item) => item.id === id);
      if (difficulty)
        chips.push({ type: "difficulty", id, label: difficulty.label });
    });

    return chips;
  }, [selectedCategories, selectedDifficulties]);

  const filteredCourses = useMemo(() => {
    let results = [...mockCourses];

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      results = results.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query),
      );
    }

    if (selectedCategories.length > 0) {
      results = results.filter((course) =>
        selectedCategories.includes(course.categoryId),
      );
    }

    if (selectedDifficulties.length > 0) {
      results = results.filter((course) =>
        selectedDifficulties.includes(course.difficultyId),
      );
    }

    if (selectedRatings.length > 0) {
      const minRating = Math.max(
        ...selectedRatings.map(
          (id) => ratingFilters.find((item) => item.id === id)?.minRating ?? 0,
        ),
      );
      results = results.filter((course) => course.rating >= minRating);
    }

    switch (activeSort) {
      case "popular":
        results.sort((a, b) => b.popularity - a.popularity);
        break;
      case "newest":
        results.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
      case "reviews":
        results.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }

    return results;
  }, [
    searchQuery,
    selectedCategories,
    selectedDifficulties,
    selectedRatings,
    activeSort,
  ]);

  const visibleCourses = filteredCourses.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCourses.length;

  const removeChip = (type: "category" | "difficulty", id: string) => {
    if (type === "category") {
      setSelectedCategories((prev) => prev.filter((item) => item !== id));
    } else {
      setSelectedDifficulties((prev) => prev.filter((item) => item !== id));
    }
    setVisibleCount(INITIAL_VISIBLE);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedDifficulties([]);
    setSelectedRatings([]);
    setSearchQuery("");
    setActiveSort("all");
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <>
      <TopNavBar />
      <main className="w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-20">
        <header className="text-center mb-20 flex flex-col items-center">
          <h1 className="text-4xl md:text-[48px] font-bold mb-4 text-on-surface tracking-tight">
            {coursesPageMeta.title}
          </h1>
          <p className="text-base text-on-surface-variant mb-8">
            {coursesPageMeta.subtitle}
          </p>

          <div className="relative w-full max-w-2xl mb-12">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-xl">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setVisibleCount(INITIAL_VISIBLE);
              }}
              placeholder={coursesPageMeta.searchPlaceholder}
              className="custom-input w-full bg-surface-container-low border border-outline-variant text-on-surface text-base rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary-container transition-shadow placeholder:text-outline"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 bg-surface-container-low p-1 rounded-full border border-outline-variant">
            {sortTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveSort(tab.id);
                  setVisibleCount(INITIAL_VISIBLE);
                }}
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

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <aside className="w-full md:w-60 shrink-0 space-y-8 md:sticky md:top-28">
            <div>
              <h3 className="text-base font-semibold mb-4 text-on-surface border-b border-outline-variant pb-2">
                카테고리
              </h3>
              <ul className="space-y-3">
                {categoryFilters.map((category) => (
                  <li key={category.id} className="flex items-center">
                    <input
                      id={`cat-${category.id}`}
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() =>
                        toggleFilter(
                          category.id,
                          selectedCategories,
                          setSelectedCategories,
                        )
                      }
                      className="custom-checkbox h-4 w-4 border-outline-variant rounded focus:ring-primary-container text-primary-container"
                    />
                    <label
                      htmlFor={`cat-${category.id}`}
                      className="ml-3 text-sm text-on-surface cursor-pointer"
                    >
                      {category.label}{" "}
                      <span className="text-outline font-code text-sm ml-1">
                        ({category.count})
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-4 text-on-surface border-b border-outline-variant pb-2">
                난이도
              </h3>
              <ul className="space-y-3">
                {difficultyFilters.map((difficulty) => (
                  <li key={difficulty.id} className="flex items-center">
                    <input
                      id={`diff-${difficulty.id}`}
                      type="checkbox"
                      checked={selectedDifficulties.includes(difficulty.id)}
                      onChange={() =>
                        toggleFilter(
                          difficulty.id,
                          selectedDifficulties,
                          setSelectedDifficulties,
                        )
                      }
                      className="custom-checkbox h-4 w-4 border-outline-variant rounded focus:ring-primary-container text-primary-container"
                    />
                    <label
                      htmlFor={`diff-${difficulty.id}`}
                      className="ml-3 text-sm text-on-surface cursor-pointer"
                    >
                      {difficulty.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-4 text-on-surface border-b border-outline-variant pb-2">
                별점
              </h3>
              <ul className="space-y-3">
                {ratingFilters.map((rating) => (
                  <li key={rating.id} className="flex items-center">
                    <input
                      id={`rate-${rating.id}`}
                      type="checkbox"
                      checked={selectedRatings.includes(rating.id)}
                      onChange={() =>
                        toggleFilter(
                          rating.id,
                          selectedRatings,
                          setSelectedRatings,
                        )
                      }
                      className="custom-checkbox h-4 w-4 border-outline-variant rounded focus:ring-primary-container text-primary-container"
                    />
                    <label
                      htmlFor={`rate-${rating.id}`}
                      className="ml-3 text-sm text-on-surface cursor-pointer flex items-center"
                    >
                      <span className="material-symbols-outlined material-symbols-filled text-[#F59E0B] text-sm mr-1">
                        star
                      </span>
                      {rating.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="flex-1 w-full">
            {activeFilterChips.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6 items-center">
                {activeFilterChips.map((chip) => (
                  <span
                    key={`${chip.type}-${chip.id}`}
                    className="inline-flex items-center px-3 py-1 rounded-full border border-primary-container bg-primary-container/10 text-primary-container text-xs font-semibold tracking-wide uppercase"
                  >
                    {chip.label}
                    <button
                      type="button"
                      onClick={() => removeChip(chip.type, chip.id)}
                      className="ml-2 hover:text-on-surface"
                      aria-label={`${chip.label} 필터 제거`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        close
                      </span>
                    </button>
                  </span>
                ))}
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-outline hover:text-on-surface text-xs font-semibold tracking-wide uppercase underline ml-2"
                >
                  {coursesPageMeta.resetFiltersLabel}
                </button>
              </div>
            )}

            {visibleCourses.length === 0 ? (
              <div className="text-center py-20 border border-outline-variant rounded-xl bg-surface-container-lowest">
                <p className="text-on-surface-variant text-base">
                  조건에 맞는 강좌가 없습니다.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}

            {hasMore && (
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className="border border-outline text-on-surface text-base px-8 py-3 rounded-full hover:bg-surface-container-low transition-colors"
                >
                  {coursesPageMeta.loadMoreLabel}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
