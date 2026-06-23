import Link from "next/link";

export default function MissionNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <h1 className="text-2xl font-bold text-on-surface mb-4">
        미션을 찾을 수 없습니다
      </h1>
      <p className="text-secondary mb-8">요청하신 미션이 존재하지 않습니다.</p>
      <Link
        href="/missions/usestate-counter"
        className="bg-on-surface text-surface-container-lowest px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
      >
        미션 둘러보기
      </Link>
    </div>
  );
}
