import type { Metadata } from "next";
import CoursesPageContent from "@/components/courses/CoursesPageContent";

export const metadata: Metadata = {
  title: "강좌 탐색 - LXP Platform",
  description: "850개 강좌에서 원하는 학습을 시작하세요.",
};

export default function CoursesPage() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">
      <CoursesPageContent />
    </div>
  );
}
