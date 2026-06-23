"use client";

import { useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import CurriculumSidebar from "@/components/course-detail/CurriculumSidebar";
import CourseDetailHeader from "@/components/course-detail/CourseDetailHeader";
import CourseDetailTabs from "@/components/course-detail/CourseDetailTabs";
import {
  CourseCurriculumSection,
  CourseInstructorSection,
  CourseLearningsSection,
  CourseReviewsSection,
} from "@/components/course-detail/CourseDetailSections";
import EnrollmentCard, {
  MobileEnrollmentBar,
} from "@/components/course-detail/EnrollmentCard";
import type { CourseDetail, CourseDetailTabId } from "@/data/mockCourseDetailData";

type CourseDetailContentProps = {
  course: CourseDetail;
};

export default function CourseDetailContent({ course }: CourseDetailContentProps) {
  const [activeTab, setActiveTab] = useState<CourseDetailTabId>("intro");
  const [activeCurriculumId, setActiveCurriculumId] = useState("lec-1");

  const handleTabChange = (tab: CourseDetailTabId) => {
    setActiveTab(tab);
  };

  return (
    <>
      <TopNavBar />
      <main className="flex-1 mt-16 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start pb-28 xl:pb-12">
        <CurriculumSidebar
          courseId={course.id}
          curriculum={course.curriculum}
          activeItemId={activeCurriculumId}
          onSelectItem={setActiveCurriculumId}
        />

        <div className="flex-1 w-full max-w-[720px] mx-auto min-w-0">
          <CourseDetailHeader course={course} />
          <CourseDetailTabs activeTab={activeTab} onTabChange={handleTabChange} />

          {activeTab === "intro" && (
            <>
              <CourseLearningsSection course={course} />
              <CourseReviewsSection
                course={course}
                onViewAllReviews={() => setActiveTab("reviews")}
              />
            </>
          )}

          {activeTab === "curriculum" && (
            <CourseCurriculumSection course={course} />
          )}

          {activeTab === "instructor" && (
            <CourseInstructorSection course={course} />
          )}

          {activeTab === "reviews" && (
            <CourseReviewsSection course={course} showAllReviews />
          )}
        </div>

        <EnrollmentCard enrollment={course.enrollment} />
      </main>

      <MobileEnrollmentBar enrollment={course.enrollment} />
      <Footer />
    </>
  );
}
