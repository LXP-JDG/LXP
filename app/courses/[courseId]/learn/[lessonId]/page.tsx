import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import CoursePlayerContent from "@/components/course-player/CoursePlayerContent";
import {
  getCoursePlayer,
  getDefaultLessonId,
  getLessonDetail,
} from "@/data/mockCoursePlayerData";

type CoursePlayerPageProps = {
  params: Promise<{ courseId: string; lessonId: string }>;
};

export async function generateMetadata({
  params,
}: CoursePlayerPageProps): Promise<Metadata> {
  const { courseId, lessonId } = await params;
  const lesson = getLessonDetail(courseId, lessonId);

  if (!lesson) {
    return { title: "강좌 플레이어 - LXP" };
  }

  return {
    title: `${lesson.title} - LXP`,
    description: lesson.description,
  };
}

export default async function CoursePlayerPage({ params }: CoursePlayerPageProps) {
  const { courseId, lessonId } = await params;
  const player = getCoursePlayer(courseId);

  if (!player) {
    notFound();
  }

  const lesson = getLessonDetail(courseId, lessonId);

  if (!lesson) {
    const defaultLessonId = getDefaultLessonId(courseId);
    if (defaultLessonId) {
      redirect(`/courses/${courseId}/learn/${defaultLessonId}`);
    }
    notFound();
  }

  return (
    <div className="bg-background min-h-screen flex flex-col text-on-surface">
      <CoursePlayerContent
        player={player}
        lesson={lesson}
        courseId={courseId}
        lessonId={lessonId}
      />
    </div>
  );
}
