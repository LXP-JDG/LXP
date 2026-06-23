import { learningSteps } from "@/data/mockHomePageData";

export default function LearningStepsSection() {
  return (
    <section className="py-24 px-4 md:px-margin-desktop bg-white">
      <div className="max-w-container-max mx-auto">
        <h2 className="text-3xl md:text-[36px] font-bold text-on-surface text-center mb-12 tracking-tight">
          이렇게 학습해요
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {learningSteps.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-xl border border-[#E2E8F0] p-8 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#eaf1ff] rounded-full flex items-center justify-center mb-6 text-[#0b1c30]">
                <span className="material-symbols-outlined text-3xl">
                  {step.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-3">
                {step.title}
              </h3>
              <p className="text-base text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
