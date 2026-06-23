import type { MissionDetail } from "@/data/mockMissionDetailData";

export default function MissionHeader({ mission }: { mission: MissionDetail }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-secondary text-sm font-medium">
          {mission.category}
        </span>
        <span className="text-secondary text-sm">•</span>
        <span className="bg-primary-container text-on-primary-fixed px-2 py-1 rounded text-xs font-semibold">
          {mission.difficulty}
        </span>
      </div>
      <h1 className="text-[28px] font-bold leading-tight">{mission.title}</h1>
      <div className="flex flex-wrap items-center gap-4 text-secondary font-code text-sm">
        <span>답안 {mission.answerCount}개</span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">favorite</span>
          좋아요 {mission.likeCount}
        </span>
        <span>•</span>
        <span>{mission.instructor}</span>
      </div>
    </section>
  );
}

export function MissionContentCard({ mission }: { mission: MissionDetail }) {
  return (
    <article className="bg-surface-container-lowest border border-secondary-container rounded-xl p-6 lg:p-8">
      <p className="text-on-surface mb-6 leading-relaxed">
        React의 핵심 훅인{" "}
        <code className="bg-surface-container text-on-surface px-1.5 py-0.5 rounded font-code text-sm">
          useState
        </code>
        를 사용하여 버튼 클릭 시 숫자가 증가하고 감소하는 간단한 카운터
        컴포넌트를 구현해 보세요.
      </p>
      <div className="bg-[#1e1e1e] text-[#d4d4d4] rounded-lg p-4 font-code text-sm overflow-x-auto">
        <pre>
          <code>{mission.starterCode}</code>
        </pre>
      </div>
    </article>
  );
}
