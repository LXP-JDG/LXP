import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetailContent from "@/components/course-detail/CourseDetailContent";
import { getCourseDetail } from "@/data/mockCourseDetailData";

type CourseDetailPageProps = {
  params: Promise<{ courseId: string }>;
};

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourseDetail(courseId);

  if (!course) {
    return { title: "강좌를 찾을 수 없습니다 - LXP" };
  }

  return {
    title: `${course.title} - LXP`,
    description: `${course.title} 강좌 상세 정보`,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { courseId } = await params;
  const course = getCourseDetail(courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col">
      <CourseDetailContent course={course} />
    </div>
  );
}
