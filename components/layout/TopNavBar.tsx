"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/mockHomePageData";

export default function TopNavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-margin-desktop h-16 bg-surface/80 backdrop-blur-md border-b border-secondary-container">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold text-on-surface">
          LXP
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              link.href !== "#" &&
              (pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href)));

            return (
              <Link
                key={link.label}
                href={link.href}
                className={
                  isActive
                    ? "font-bold border-b-2 pb-1 text-base text-on-surface border-on-surface"
                    : "text-base text-secondary hover:text-primary transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="hover:text-primary transition-colors text-base text-on-surface"
        >
          로그인
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 rounded-full text-base font-medium hover:opacity-90 transition-opacity bg-on-surface text-surface-container-lowest"
        >
          무료 시작
        </Link>
      </div>
    </nav>
  );
}
