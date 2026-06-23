import Link from "next/link";
import type { CoursePlayerData, LessonDetail } from "@/data/mockCoursePlayerData";

type VideoPlayerGateProps = {
  gate: CoursePlayerData["subscriptionGate"];
  lesson: LessonDetail;
};

export default function VideoPlayerGate({ gate, lesson }: VideoPlayerGateProps) {
  const showGate = lesson.premium;

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden border border-secondary-container relative bg-inverse-surface shadow-sm mb-8 group">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md opacity-40"
        style={{ backgroundImage: `url('${gate.videoPoster}')` }}
        role="img"
        aria-label="강의 영상 미리보기"
      />
      <div className="absolute inset-0 bg-inverse-surface/60" />

      {showGate ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <span className="material-symbols-outlined material-symbols-filled text-[48px] text-primary-container mb-4">
            lock
          </span>
          <h3 className="text-2xl font-bold text-on-primary mb-2">
            {gate.title}
          </h3>
          <p className="text-sm text-surface-container-highest mb-6 max-w-md">
            {gate.description}
          </p>
          <Link
            href={gate.ctaHref}
            className="bg-primary-container text-on-primary-container text-base font-semibold px-8 py-3 rounded-full hover:bg-primary-fixed transition-colors shadow-sm"
          >
            {gate.ctaLabel}
          </Link>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <button
            type="button"
            className="w-16 h-16 rounded-full bg-primary-container/90 flex items-center justify-center hover:bg-primary-container transition-colors shadow-lg"
            aria-label="재생"
          >
            <span className="material-symbols-outlined material-symbols-filled text-on-primary-container text-4xl">
              play_arrow
            </span>
          </button>
        </div>
      )}

      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-4 opacity-50 pointer-events-none">
        <span className="material-symbols-outlined text-white text-[24px]">
          play_arrow
        </span>
        <div className="h-1 bg-white/30 flex-grow rounded-full overflow-hidden">
          <div className="h-full bg-primary-container w-0" />
        </div>
        <span className="text-white text-xs">00:00 / {gate.playerDuration}</span>
        <span className="material-symbols-outlined text-white text-[20px]">
          fullscreen
        </span>
      </div>
    </div>
  );
}
