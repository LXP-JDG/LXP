"use client";

import { useState } from "react";
import type { MissionDetail } from "@/data/mockMissionDetailData";

type AnswerFormProps = {
  form: MissionDetail["answerForm"];
};

export default function AnswerForm({ form }: AnswerFormProps) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="bg-surface-container-lowest border border-secondary-container rounded-xl p-6 lg:p-8 flex flex-col gap-4 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
      <h2 className="text-lg font-bold">{form.title}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <textarea
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            className="w-full h-32 p-4 border border-secondary-container rounded-lg focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container resize-none text-sm"
            placeholder={form.placeholder}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
          <span className="text-sm text-secondary flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">info</span>
            {form.notice}
          </span>
          <button
            type="submit"
            className="bg-on-surface text-surface-container-lowest px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity shrink-0"
          >
            {form.submitLabel}
          </button>
        </div>
      </form>
    </section>
  );
}
