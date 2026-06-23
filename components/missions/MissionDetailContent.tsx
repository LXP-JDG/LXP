import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import MissionHeader, {
  MissionContentCard,
} from "@/components/missions/MissionHeader";
import AnswerForm from "@/components/missions/AnswerForm";
import AnswerFeed, { MissionSidebar } from "@/components/missions/AnswerFeed";
import type { MissionDetail } from "@/data/mockMissionDetailData";

type MissionDetailContentProps = {
  mission: MissionDetail;
};

export default function MissionDetailContent({
  mission,
}: MissionDetailContentProps) {
  return (
    <>
      <TopNavBar />
      <div className="pt-24 px-4 md:px-margin-desktop max-w-container-max mx-auto flex flex-col lg:flex-row gap-gutter relative grow">
        <main className="flex-1 w-full max-w-[720px] mx-auto lg:mx-0 flex flex-col gap-8 pb-12">
          <MissionHeader mission={mission} />
          <MissionContentCard mission={mission} />
          <AnswerForm form={mission.answerForm} />
          <AnswerFeed answers={mission.answers} />
        </main>
        <MissionSidebar mission={mission} />
      </div>
      <Footer />
    </>
  );
}
