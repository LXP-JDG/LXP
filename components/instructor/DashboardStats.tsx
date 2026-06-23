import { mockInstructorStats } from "@/data/mockInstructorDashboardData";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {mockInstructorStats.map((stat) => (
        <div
          key={stat.id}
          className="rounded-xl p-6 bg-surface-container-lowest/80 backdrop-blur-md border border-tertiary-fixed"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold text-on-surface-variant tracking-wide uppercase">
                {stat.label}
              </p>
              <p className="font-code text-2xl font-bold text-on-surface mt-2">
                {stat.value}
              </p>
            </div>
            <div className="p-3 bg-surface-container-high rounded-full text-primary">
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
          </div>

          {stat.trend ? (
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="text-primary-container flex items-center">
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
                {stat.trend}
              </span>
              <span className="text-on-surface-variant text-sm">
                {stat.trendLabel}
              </span>
            </div>
          ) : stat.progress !== null ? (
            <div className="mt-4 flex items-center gap-2 text-sm">
              <div className="flex-1 bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary-container h-full rounded-full"
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
