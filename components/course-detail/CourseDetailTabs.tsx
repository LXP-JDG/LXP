import type { CourseDetailTabId } from "@/data/mockCourseDetailData";
import { courseDetailTabs } from "@/data/mockCourseDetailData";

type CourseDetailTabsProps = {
  activeTab: CourseDetailTabId;
  onTabChange: (tab: CourseDetailTabId) => void;
};

export default function CourseDetailTabs({
  activeTab,
  onTabChange,
}: CourseDetailTabsProps) {
  return (
    <div className="flex border-b border-secondary-container mb-8 overflow-x-auto scrollbar-hide">
      {courseDetailTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
          className={
            activeTab === tab.id
              ? "px-6 py-4 border-b-2 border-primary text-primary font-medium text-base whitespace-nowrap"
              : "px-6 py-4 border-b-2 border-transparent text-secondary hover:text-on-surface transition-colors text-base whitespace-nowrap"
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
