import type { Metadata } from "next";
import MyPageContent from "@/components/mypage/MyPageContent";

export const metadata: Metadata = {
  title: "LXP - 마이페이지",
  description: "프로필, 강좌, 픽 목록, 결제 및 구독 정보를 관리하세요.",
};

export default function MyPage() {
  return (
    <div className="bg-background text-on-background flex flex-col min-h-screen">
      <MyPageContent />
    </div>
  );
}
