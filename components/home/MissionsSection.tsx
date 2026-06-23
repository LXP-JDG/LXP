import Link from "next/link";
import { featuredMission, missions } from "@/data/mockHomePageData";

function MissionTags({ tags }: { tags: readonly string[] }) {
  return (
    <div className="flex items-center gap-2 mb-4 flex-wrap">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-[#f8f9ff] text-on-surface border border-[#E2E8F0]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function MissionStats({
  comments,
  likes,
}: {
  comments: number;
  likes: number;
}) {
  return (
    <div className="flex items-center gap-4 font-code text-sm text-on-surface-variant">
      <span className="flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[18px]">forum</span>
        {comments}
      </span>
      <span className="flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[18px]">favorite</span>
        {likes}
      </span>
    </div>
  );
}

export default function MissionsSection() {
  return (
    <section className="py-24 px-4 md:px-margin-desktop bg-white">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-[32px] font-bold text-on-surface tracking-tight">
            지금 도전할 미션
          </h2>
          <a
            className="text-base text-on-surface hover:underline flex items-center gap-1"
            href="#"
          >
            전체 보기{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden flex flex-col md:flex-row mb-8 shadow-sm">
          <div className="md:w-2/5 aspect-video md:aspect-auto bg-surface-container-low">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover min-h-[200px]"
              src={featuredMission.image.src}
              alt={featuredMission.image.alt}
            />
          </div>
          <div className="p-8 md:w-3/5 flex flex-col">
            <p className="text-sm font-bold text-[#0b1c30] mb-4 tracking-widest uppercase">
              {featuredMission.badge}
            </p>
            <MissionTags tags={featuredMission.tags} />
            <h3 className="text-2xl font-bold text-on-surface mb-4">
              {featuredMission.title}
            </h3>
            <p className="text-base text-on-surface-variant mb-8 grow">
              {featuredMission.description}
            </p>
            <div className="flex justify-between items-center mt-auto pt-6 border-t border-outline-variant">
              <MissionStats
                comments={featuredMission.comments}
                likes={featuredMission.likes}
              />
              <Link
                href={`/missions/${featuredMission.id}`}
                className="bg-[#0b1c30] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                도전하기
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {missions.map((mission) => (
            <div
              key={mission.title}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <MissionTags tags={mission.tags} />
              <h3 className="text-lg font-bold text-on-surface mb-3 grow">
                {mission.title}
              </h3>
              <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">
                {mission.description}
              </p>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-outline-variant">
                <MissionStats
                  comments={mission.comments}
                  likes={mission.likes}
                />
                <button
                  type="button"
                  className="bg-[#0b1c30] text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  도전하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
