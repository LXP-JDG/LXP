"use client";

import { useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import MyPageSideNav from "@/components/mypage/MyPageSideNav";
import ProfileSettings from "@/components/mypage/ProfileSettings";
import MyCoursesSection from "@/components/mypage/MyCoursesSection";
import MyPicksSection from "@/components/mypage/MyPicksSection";
import PaymentHistorySection from "@/components/mypage/PaymentHistorySection";
import SubscriptionSection from "@/components/mypage/SubscriptionSection";

export default function MyPageContent() {
  const [activeSection, setActiveSection] = useState("profile");

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <TopNavBar />
      <div className="flex flex-1 pt-16 w-full">
        <MyPageSideNav activeId={activeSection} onNavigate={handleNavigate} />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 space-y-6">
              <ProfileSettings />
              <MyCoursesSection />
              <MyPicksSection />
              <PaymentHistorySection />
              <SubscriptionSection />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
