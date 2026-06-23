import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MissionDetailContent from "@/components/missions/MissionDetailContent";
import { getMissionDetail } from "@/data/mockMissionDetailData";

type MissionDetailPageProps = {
  params: Promise<{ missionId: string }>;
};

export async function generateMetadata({
  params,
}: MissionDetailPageProps): Promise<Metadata> {
  const { missionId } = await params;
  const mission = getMissionDetail(missionId);

  if (!mission) {
    return { title: "미션 - LXP" };
  }

  return {
    title: `${mission.title} - LXP`,
    description: mission.description,
  };
}

export default async function MissionDetailPage({
  params,
}: MissionDetailPageProps) {
  const { missionId } = await params;
  const mission = getMissionDetail(missionId);

  if (!mission) {
    notFound();
  }

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <MissionDetailContent mission={mission} />
    </div>
  );
}
