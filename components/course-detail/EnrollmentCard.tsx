import type { CourseDetail } from "@/data/mockCourseDetailData";

type EnrollmentCardProps = {
  enrollment: CourseDetail["enrollment"];
};

export default function EnrollmentCard({ enrollment }: EnrollmentCardProps) {
  return (
    <aside className="hidden xl:block w-[280px] shrink-0 sticky top-24">
      <div className="border border-secondary-container rounded-xl p-6 bg-surface-container-lowest shadow-sm">
        <div className="inline-block bg-surface-container-high text-primary text-xs font-semibold tracking-wide uppercase px-2 py-1 rounded mb-4">
          {enrollment.trialBadge}
        </div>
        <div className="mb-6">
          <div className="font-code text-sm text-secondary line-through mb-1">
            {enrollment.originalPrice}
          </div>
          <div className="font-code text-2xl font-bold text-on-surface">
            {enrollment.price}{" "}
            <span className="text-sm font-normal text-secondary">
              {enrollment.priceNote}
            </span>
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-on-surface text-surface-container-lowest rounded-full py-3 text-base font-medium hover:opacity-90 transition-opacity mb-3"
        >
          {enrollment.ctaLabel}
        </button>
        <p className="text-center text-secondary text-xs mb-6">
          {enrollment.notice}
        </p>
        <div className="border-t border-secondary-container pt-4 space-y-3">
          {enrollment.features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-3 text-secondary text-sm"
            >
              <span className="material-symbols-outlined text-[18px]">
                {feature.icon}
              </span>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function MobileEnrollmentBar({
  enrollment,
}: EnrollmentCardProps) {
  return (
    <div className="xl:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-secondary-container p-4 flex justify-between items-center z-40">
      <div>
        <div className="font-code text-2xl font-bold text-on-surface">
          {enrollment.price}
        </div>
        <div className="font-code text-xs text-secondary">
          {enrollment.priceNote}
        </div>
      </div>
      <button
        type="button"
        className="bg-on-surface text-surface-container-lowest rounded-full px-8 py-3 text-base font-medium hover:opacity-90 transition-opacity"
      >
        {enrollment.ctaLabel}
      </button>
    </div>
  );
}
