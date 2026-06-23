import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustLogoWall from "@/components/home/TrustLogoWall";
import LearningStepsSection from "@/components/home/LearningStepsSection";
import WhyLxpSection from "@/components/home/WhyLxpSection";
import MissionsSection from "@/components/home/MissionsSection";
import StatisticsBand from "@/components/home/StatisticsBand";
import PopularCoursesSection from "@/components/home/PopularCoursesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBand from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="grow">
        <HeroSection />
        <TrustLogoWall />
        <LearningStepsSection />
        <WhyLxpSection />
        <MissionsSection />
        <StatisticsBand />
        <PopularCoursesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
