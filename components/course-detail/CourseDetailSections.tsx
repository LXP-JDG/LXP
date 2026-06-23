import Link from "next/link";
import type { CourseDetail } from "@/data/mockCourseDetailData";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <span
          key={`full-${i}`}
          className="material-symbols-outlined material-symbols-filled text-[16px]"
        >
          star
        </span>
      ))}
      {hasHalf && (
        <span className="material-symbols-outlined material-symbols-filled text-[16px]">
          star_half
        </span>
      )}
    </div>
  );
}

function ReviewSummary({ course }: { course: CourseDetail }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-8 p-6 rounded-xl border border-secondary-container bg-surface-container-low">
      <div className="text-center">
        <div className="text-[48px] font-bold text-on-surface leading-none">
          {course.rating}
        </div>
        <div className="flex items-center justify-center gap-1 text-primary mb-1 mt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined material-symbols-filled text-[20px]"
            >
              star
            </span>
          ))}
          <span className="material-symbols-outlined material-symbols-filled text-[20px]">
            star_half
          </span>
        </div>
        <div className="text-sm text-secondary">{course.reviewCount}개 후기</div>
      </div>
      <div className="flex-1 w-full space-y-2">
        {course.ratingBreakdown.map((row) => (
          <div key={row.stars} className="flex items-center gap-3">
            <span className="font-code text-sm text-secondary w-4">
              {row.stars}
            </span>
            <div className="flex-1 h-2 bg-secondary-container rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${row.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewCard({
  review,
}: {
  review: CourseDetail["reviews"][number];
}) {
  if (review.featured) {
    return (
      <div className="p-6 rounded-xl border border-error-container bg-[#fff5f2] flex flex-col gap-4 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-16 h-16 bg-error-container/50 rounded-bl-full -mr-4 -mt-4" />
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1 text-[#e04f26]">
            <StarRating rating={review.rating} />
          </div>
          <div className="text-sm text-secondary font-code">
            {review.author} · {review.date}
          </div>
        </div>
        <p className="relative z-10 text-base text-on-surface font-medium leading-relaxed">
          {review.content}
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl border border-secondary-container bg-surface-container-lowest flex flex-col gap-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-primary">
          <StarRating rating={review.rating} />
        </div>
        <div className="text-sm text-secondary font-code">
          {review.author} · {review.date}
        </div>
      </div>
      <p className="text-base text-on-surface leading-relaxed">{review.content}</p>
    </div>
  );
}

type CourseIntroSectionProps = {
  course: CourseDetail;
  showAllReviews?: boolean;
  onViewAllReviews?: () => void;
};

export function CourseLearningsSection({ course }: { course: CourseDetail }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-on-surface mb-6">이런 걸 배워요</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {course.learnings.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="material-symbols-outlined material-symbols-filled text-primary-container mt-0.5 shrink-0">
              check_circle
            </span>
            <span className="text-base text-on-surface">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CourseReviewsSection({
  course,
  showAllReviews = false,
  onViewAllReviews,
}: CourseIntroSectionProps) {
  const reviews = showAllReviews
    ? course.reviews
    : course.reviews.slice(0, 3);

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-on-surface">수강생 후기</h2>
        {!showAllReviews && (
          <button
            type="button"
            onClick={onViewAllReviews}
            className="text-primary text-sm font-medium hover:underline"
          >
            전체 보기
          </button>
        )}
      </div>
      <ReviewSummary course={course} />
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}

export function CourseCurriculumSection({ course }: { course: CourseDetail }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-on-surface mb-6">전체 커리큘럼</h2>
      <div className="space-y-6">
        {course.curriculum.map((week) => (
          <div
            key={week.week}
            className="border border-secondary-container rounded-xl overflow-hidden"
          >
            <div className="bg-surface-container-low px-5 py-3 font-semibold text-on-surface">
              {week.week}
            </div>
            <ul className="divide-y divide-secondary-container">
              {week.items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 px-5 py-4 text-sm text-on-surface"
                >
                  {item.type === "lecture" ? (
                    <Link
                      href={`/courses/${course.id}/learn/${item.id}`}
                      className="flex items-center gap-3 flex-1 hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-primary-container">
                        play_circle
                      </span>
                      <span className="flex-1 font-medium">{item.title}</span>
                      {item.duration && (
                        <span className="font-code text-secondary text-xs">
                          {item.duration}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <>
                      {item.completed ? (
                        <span className="material-symbols-outlined material-symbols-filled text-primary-container">
                          check_circle
                        </span>
                      ) : (
                        <span className="material-symbols-outlined text-secondary">
                          assignment
                        </span>
                      )}
                      <span className="flex-1 font-medium">{item.title}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CourseInstructorSection({ course }: { course: CourseDetail }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-on-surface mb-6">강사 소개</h2>
      <div className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-xl border border-secondary-container bg-surface-container-lowest">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-20 h-20 rounded-full object-cover shrink-0"
          src={course.instructor.avatar}
          alt={course.instructor.name}
        />
        <div>
          <h3 className="text-xl font-semibold text-on-surface mb-1">
            {course.instructor.name}
          </h3>
          <p className="text-sm text-secondary mb-4">{course.instructor.role}</p>
          <p className="text-base text-on-surface-variant leading-relaxed">
            {course.instructor.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
