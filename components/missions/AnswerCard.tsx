"use client";

import type { MissionAnswer } from "@/data/mockMissionDetailData";

type AnswerCardProps = {
  answer: MissionAnswer;
  onToggleLike: (answerId: string) => void;
};

export default function AnswerCard({ answer, onToggleLike }: AnswerCardProps) {
  return (
    <article
      className={
        answer.isBest
          ? "bg-surface-container-lowest border-2 border-[#ff7a59] rounded-xl p-6 relative"
          : "bg-surface-container-lowest border border-secondary-container rounded-xl p-6"
      }
    >
      {answer.isBest && (
        <div className="absolute -top-3 left-6 bg-[#ff7a59] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
          <span className="material-symbols-outlined material-symbols-filled text-[14px]">
            star
          </span>
          베스트 답안
        </div>
      )}

      <div className={`flex items-center gap-3 mb-4 ${answer.isBest ? "mt-2" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-10 h-10 rounded-full object-cover border border-secondary-container shrink-0"
          src={answer.avatar}
          alt={answer.author}
        />
        <div>
          <div className="font-semibold text-sm">{answer.author}</div>
          <div className="text-xs text-secondary font-code">{answer.createdAt}</div>
        </div>
      </div>

      <div className="text-on-surface text-sm leading-relaxed mb-4">
        {answer.content}
      </div>

      {answer.code && (
        <div className="bg-[#1e1e1e] text-[#d4d4d4] rounded-lg p-4 font-code text-sm overflow-x-auto mb-4">
          <pre>
            <code>{answer.code}</code>
          </pre>
        </div>
      )}

      <div className="flex items-center gap-4 text-secondary text-sm pt-4 border-t border-secondary-container">
        <button
          type="button"
          onClick={() => onToggleLike(answer.id)}
          className={`flex items-center gap-1 transition-opacity font-medium ${
            answer.likedByMe
              ? "text-primary-container hover:opacity-80"
              : "hover:text-primary-container"
          }`}
        >
          <span
            className={`material-symbols-outlined text-[18px] ${
              answer.likedByMe ? "material-symbols-filled" : ""
            }`}
          >
            favorite
          </span>
          {answer.likes}
        </button>
        <button
          type="button"
          className="flex items-center gap-1 hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">
            chat_bubble
          </span>
          {answer.commentCount}
        </button>
        <div className="flex-1" />
        <button
          type="button"
          className="text-xs hover:text-on-surface transition-colors flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[16px]">flag</span>
          신고
        </button>
      </div>

      {answer.comments.length > 0 && (
        <div className="mt-4 pl-4 border-l-2 border-surface-container-high flex flex-col gap-3">
          {answer.comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-6 h-6 rounded-full object-cover shrink-0"
                src={comment.avatar}
                alt={comment.author}
              />
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-xs">{comment.author}</span>
                  <span className="text-xs text-tertiary">{comment.createdAt}</span>
                </div>
                <span className="text-sm text-on-surface-variant mt-0.5">
                  {comment.content}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
