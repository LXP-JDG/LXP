import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetailContent from "@/components/course-detail/CourseDetailContent";
import { getCourseDetail as getApiCourseDetail } from "@/lib/api/courses";
import { getCourseDetail as getMockCourseDetail, getDefaultCourseDetail } from "@/data/mockCourseDetailData";
import type { CourseDetail } from "@/data/mockCourseDetailData";

type Props = {
  params: Promise<{ courseId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courseId } = await params;

  // 숫자 ID면 API에서 메타데이터 조회 시도
  const numId = Number(courseId);
  if (!isNaN(numId)) {
    try {
      const course = await getApiCourseDetail(numId);
      return { title: `${course.title} - LXP`, description: course.description };
    } catch {
      return { title: "강좌를 찾을 수 없습니다 - LXP" };
    }
  }

  const mock = getMockCourseDetail(courseId);
  if (!mock) return { title: "강좌를 찾을 수 없습니다 - LXP" };
  return { title: `${mock.title} - LXP`, description: `${mock.title} 강좌 상세 정보` };
}

export default async function CourseDetailPage({ params }: Props) {
  const { courseId } = await params;

  const numId = Number(courseId);

  // 숫자 ID → 실제 API 호출
  if (!isNaN(numId)) {
    let apiCourse;
    try {
      apiCourse = await getApiCourseDetail(numId);
    } catch {
      notFound();
    }

    // API 응답을 CourseDetail 형태로 변환 (UI 렌더링용 기본값 포함)
    // CourseDetail 타입이 const 파생이라 타입 단언 사용
    const defaults = getDefaultCourseDetail();
    const hasCurriculum = apiCourse.lectures.length > 0 || apiCourse.missions.length > 0;
    const course = {
      ...defaults,
      id: String(apiCourse.courseId),
      title: apiCourse.title,
      lectureCount: apiCourse.lectures.filter((l) => l.status === "PUBLIC").length,
      missionCount: apiCourse.missions.filter((m) => m.status === "PUBLIC").length,
      curriculum: hasCurriculum
        ? [
            {
              week: "강의 목록",
              items: [
                ...apiCourse.lectures.map((l) => ({
                  id: `lec-${l.lectureId}`,
                  type: "lecture" as const,
                  title: l.title,
                  duration: "",
                  active: false,
                  completed: false,
                })),
                ...apiCourse.missions.map((m) => ({
                  id: `mis-${m.missionId}`,
                  type: "mission" as const,
                  title: m.title,
                  completed: false,
                })),
              ],
            },
          ]
        : defaults.curriculum,
    } as unknown as CourseDetail;

    return (
      <div className="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col">
        <CourseDetailContent course={course} />
      </div>
    );
  }

  // 문자열 ID (mock) → 기존 mock 데이터 사용
  const course = getMockCourseDetail(courseId);
  if (!course) notFound();

  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col">
      <CourseDetailContent course={course} />
    </div>
  );
}
