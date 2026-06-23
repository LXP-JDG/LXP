"use client";

import { useState } from "react";
import { mockPicks, myPageSectionTitles } from "@/data/mockMyPageData";

export default function MyPicksSection() {
  const [picks, setPicks] = useState([...mockPicks]);

  const handleRemove = (id: string) => {
    setPicks((prev) => prev.filter((pick) => pick.id !== id));
  };

  return (
    <section
      id="picks"
      className="bg-surface-container-lowest border border-[#E2E8F0] rounded-xl p-6 md:p-8 scroll-mt-24"
    >
      <h3 className="text-2xl font-semibold text-on-surface mb-6 border-b border-[#E2E8F0] pb-4">
        {myPageSectionTitles.picks}
      </h3>

      {picks.length === 0 ? (
        <p className="text-sm text-on-surface-variant text-center py-8">
          저장된 픽이 없습니다.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {picks.map((pick) => (
            <article
              key={pick.id}
              className="bg-surface-container-lowest border border-[#E2E8F0] rounded-xl p-6 relative group hover:shadow-sm transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 bg-surface-variant text-on-surface text-xs font-semibold tracking-wide rounded-full">
                  {pick.type}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(pick.id)}
                  className="text-tertiary hover:text-error transition-colors p-1"
                  title="삭제"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    delete
                  </span>
                </button>
              </div>
              <h4 className="text-xl font-semibold mb-2 leading-tight text-on-surface">
                {pick.title}
              </h4>
              <p className="text-on-surface-variant text-sm">
                {pick.description}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
