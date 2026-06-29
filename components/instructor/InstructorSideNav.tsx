import Link from "next/link";
import {
  instructorFooterNav,
  instructorNavItems,
  instructorProfile,
} from "@/data/mockInstructorDashboardData";

type InstructorSideNavProps = {
  activeId?: string;
};

export default function InstructorSideNav({
  activeId = "courses",
}: InstructorSideNavProps) {
  return (
    <nav className="hidden md:flex flex-col bg-surface-container-low w-72 h-screen fixed left-0 top-0 border-r border-tertiary-fixed z-40">
      <div className="p-6 border-b border-tertiary-fixed/50">
        <div className="flex items-center gap-4 mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="강사 프로필"
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container/30 bg-surface-container-high object-cover shrink-0"
            src={instructorProfile.avatar}
          />
          <div>
            <h2 className="text-lg font-semibold text-on-surface">
              {instructorProfile.name}
            </h2>
            <p className="text-xs text-on-surface-variant">
              {instructorProfile.subtitle}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-primary-container text-on-primary-container text-xs font-semibold tracking-wide uppercase px-6 py-3 rounded-full hover:bg-primary-fixed transition-colors inline-flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(0,212,164,0.39)]"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          {instructorProfile.createCourseLabel}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {instructorNavItems.map((item) => {
          const isActive = item.id === activeId;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-base ${
                isActive
                  ? "text-primary font-bold bg-surface-container-high border-l-4 border-primary"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
              }`}
            >
              <span
                className={`material-symbols-outlined ${
                  "filled" in item && item.filled && isActive ? "material-symbols-filled" : ""
                }`}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-tertiary-fixed/50 space-y-1">
        {instructorFooterNav.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm text-on-surface-variant hover:bg-surface-container hover:text-primary"
          >
            <span className="material-symbols-outlined text-sm">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
