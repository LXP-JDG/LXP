import type { Metadata } from "next";
import CourseTable from "@/components/instructor/CourseTable";
import InstructorMobileHeader from "@/components/instructor/InstructorMobileHeader";
import InstructorSideNav from "@/components/instructor/InstructorSideNav";

export const metadata: Metadata = {
  title: "LXP Instructor Dashboard - 강좌 관리",
  description: "운영 중인 강좌의 상태를 모니터링하고 콘텐츠를 업데이트하세요.",
};

export default function InstructorCoursesPage() {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen flex flex-col md:flex-row">
      <InstructorMobileHeader />
      <InstructorSideNav activeId="courses" />
      <main className="flex-1 md:ml-72 pt-16 md:pt-0 p-4 md:p-10 w-full max-w-[1200px] mx-auto space-y-12">
        <CourseTable />
      </main>
    </div>
  );
}
