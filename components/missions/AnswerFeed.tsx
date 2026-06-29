"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { MissionDetail, MissionAnswer } from "@/data/mockMissionDetailData";
import {
  answerSortOptions,
  type AnswerSortId,
} from "@/data/mockMissionDetailData";
import AnswerCard from "@/components/missions/AnswerCard";

type AnswerFeedProps = {
  answers: readonly MissionAnswer[];
};

export default function AnswerFeed({ answers }: AnswerFeedProps) {
  const [sortBy, setSortBy] = useState<AnswerSortId>("latest");
  const [localAnswers, setLocalAnswers] = useState<MissionAnswer[]>(
    answers.map((answer) => ({ ...answer })),
  );

  const sortedAnswers = useMemo(() => {
    const list = [...localAnswers];
    if (sortBy === "likes") {
      list.sort((a, b) => b.likes - a.likes);
    } else {
      list.sort((a, b) => a.createdAtSort - b.createdAtSort);
    }
    return list;
  }, [localAnswers, sortBy]);

  const handleToggleLike = (answerId: string) => {
    setLocalAnswers((prev) =>
      prev.map((answer) => {
        if (answer.id !== answerId) return answer;
        const likedByMe = !answer.likedByMe;
        return {
          ...answer,
          likedByMe,
          likes: likedByMe ? answer.likes + 1 : answer.likes - 1,
        };
      }),
    );
  };

  return (
    <section className="flex flex-col gap-6 mt-4">
      <div className="flex items-center gap-6 border-b border-secondary-container pb-2">
        {answerSortOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setSortBy(option.id)}
            className={
              sortBy === option.id
                ? "text-on-surface font-semibold relative after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-full after:h-0.5 after:bg-primary-container"
                : "text-secondary hover:text-on-surface font-medium transition-colors"
            }
          >
            {option.label}
          </button>
        ))}
      </div>

      {sortedAnswers.map((answer) => (
        <AnswerCard
          key={answer.id}
          answer={answer}
          onToggleLike={handleToggleLike}
        />
      ))}
    </section>
  );
}

export function MissionSidebar({ mission }: { mission: MissionDetail }) {
  return (
    <aside className="hidden lg:block w-[280px] shrink-0 relative">
      <div className="sticky top-24 flex flex-col gap-6">
        <div className="bg-surface-container-lowest border border-secondary-container rounded-xl p-5 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
          <h3 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
            이 미션이 속한 강좌
          </h3>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">library_books</span>
            </div>
            <Link
              href={`/courses/${mission.course.courseId}`}
              className="font-semibold text-sm leading-tight text-on-surface hover:text-primary transition-colors"
            >
              {mission.course.title}
            </Link>
          </div>
          <Link
            href={`/courses/${mission.course.courseId}`}
            className="text-xs text-secondary hover:text-on-surface flex items-center gap-1 transition-colors"
          >
            {mission.course.homeLabel}{" "}
            <span className="material-symbols-outlined text-[14px]">
              arrow_forward
            </span>
          </Link>
        </div>

        <Link
          href={`/missions/${mission.nextMission.id}`}
          className="group block bg-surface-container-lowest border border-secondary-container rounded-xl p-5 hover:border-primary-container transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.02)]"
        >
          <h3 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
            다음 미션
          </h3>
          <div className="font-semibold text-sm text-on-surface group-hover:text-primary-container transition-colors flex items-center justify-between gap-2">
            {mission.nextMission.title}
            <span className="material-symbols-outlined text-[16px] text-tertiary group-hover:text-primary-container transition-colors shrink-0">
              chevron_right
            </span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
