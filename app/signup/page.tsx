import type { Metadata } from "next";
import Link from "next/link";
import SignupBrandPanel from "@/components/auth/SignupBrandPanel";
import SignupForm from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "LXP - 회원가입",
  description: "LXP 학습 플랫폼에 가입하고 새로운 학습 여정을 시작하세요.",
};

export default function SignupPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface antialiased min-h-screen flex">
      <SignupBrandPanel />

      <div className="w-full lg:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop lg:p-20 overflow-y-auto relative">
        <Link
          href="/"
          className="absolute top-8 left-8 lg:hidden text-2xl font-bold text-on-surface flex items-center gap-2"
        >
          <span className="material-symbols-outlined material-symbols-filled text-primary-container">
            widgets
          </span>
          LXP
        </Link>

        <SignupForm />
      </div>
    </div>
  );
}
