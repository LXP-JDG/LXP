import type { Metadata } from "next";
import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = {
  title: "LXP 요금제",
  description:
    "당신의 학습 여정에 맞는 최적의 플랜을 선택하세요. 모든 플랜은 언제든 취소 가능합니다.",
};

export default function PricingPage() {
  return (
    <div className="antialiased min-h-screen flex flex-col bg-white text-on-background">
      <PricingPageContent />
    </div>
  );
}
