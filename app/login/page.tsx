import type { Metadata } from "next";
import Link from "next/link";
import LoginBrandPanel from "@/components/auth/LoginBrandPanel";
import LoginForm from "@/components/auth/LoginForm";
import { loginBrandData } from "@/data/mockLoginPageData";

export const metadata: Metadata = {
  title: "LXP 로그인",
  description: "LXP 학습 플랫폼에 로그인하세요.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex antialiased">
      <LoginBrandPanel />

      <div className="w-full lg:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface relative">
        <Link
          href="/"
          className="absolute top-8 left-8 lg:hidden text-2xl font-semibold text-on-surface flex items-center gap-2"
        >
          <span className="material-symbols-outlined material-symbols-filled text-primary-container">
            widgets
          </span>
          {loginBrandData.logo}
        </Link>

        <LoginForm />
      </div>
    </div>
  );
}
