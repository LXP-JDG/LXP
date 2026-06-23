"use client";

import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import PlayerSidebar from "@/components/course-player/PlayerSidebar";
import VideoPlayerGate from "@/components/course-player/VideoPlayerGate";
import LessonDetails from "@/components/course-player/LessonDetails";
import type { CoursePlayerData, LessonDetail } from "@/data/mockCoursePlayerData";

type CoursePlayerContentProps = {
  player: CoursePlayerData;
  lesson: LessonDetail;
  courseId: string;
  lessonId: string;
};

export default function CoursePlayerContent({
  player,
  lesson,
  courseId,
  lessonId,
}: CoursePlayerContentProps) {
  const completedLessons = new Set(
    player.sections
      .flatMap((section) => section.lessons)
      .filter((item) => item.completed)
      .map((item) => item.id),
  );

  return (
    <>
      <TopNavBar />
      <main className="grow flex pt-16 min-h-[calc(100vh-4rem)]">
        <PlayerSidebar
          player={player}
          activeLessonId={lessonId}
          completedLessons={completedLessons}
          courseId={courseId}
        />

        <section className="grow flex flex-col h-full overflow-y-auto bg-background p-gutter">
          <div className="max-w-[1000px] mx-auto w-full pb-20">
            <VideoPlayerGate gate={player.subscriptionGate} lesson={lesson} />
            <LessonDetails lesson={lesson} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
