"use client";

import { myPageSideNavItems } from "@/data/mockMyPageData";

type MyPageSideNavProps = {
  activeId: string;
  onNavigate: (id: string) => void;
};

export default function MyPageSideNav({
  activeId,
  onNavigate,
}: MyPageSideNavProps) {
  return (
    <aside className="w-72 shrink-0 p-6 hidden md:block h-[calc(100vh-64px)] overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-on-surface mb-2">마이페이지</h2>
      </div>
      <nav className="space-y-2">
        {myPageSideNavItems.map((item) => {
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 text-left ${
                isActive
                  ? "text-primary font-bold border-l-4 border-primary-container bg-surface-container-high hover:opacity-80"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-base">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
