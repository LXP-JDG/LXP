import { loginBrandData } from "@/data/mockLoginPageData";

export default function LoginBrandPanel() {
  const titleLines = loginBrandData.title.split("\n");

  return (
    <div className="hidden lg:flex lg:w-1/2 relative bg-surface-container-lowest border-r border-secondary-fixed flex-col justify-between overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply"
        style={{ backgroundImage: `url('${loginBrandData.backgroundImage}')` }}
        role="img"
        aria-label="학습 플랫폼 브랜드 일러스트"
      />

      <div className="relative z-10 p-12">
        <div className="text-2xl font-semibold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined material-symbols-filled text-primary-container">
            widgets
          </span>
          {loginBrandData.logo}
        </div>
      </div>

      <div className="relative z-10 px-12 pb-12 w-full max-w-2xl">
        <div className="bg-surface-container-lowest/80 backdrop-blur-xl border border-secondary-fixed rounded-xl p-8 relative">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-secondary-fixed" />
            <div className="w-3 h-3 rounded-full bg-secondary-fixed" />
            <div className="w-3 h-3 rounded-full bg-secondary-fixed" />
          </div>

          <h1 className="text-4xl md:text-[48px] font-bold leading-tight tracking-tight text-on-surface mb-6">
            {titleLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="text-base text-on-surface-variant mb-8 max-w-md">
            {loginBrandData.description}
          </p>

          <div className="bg-on-surface text-on-primary rounded-lg p-6 font-code text-sm border border-on-surface-variant overflow-hidden">
            <div className="flex items-center gap-2 mb-2 text-primary-container">
              <span className="material-symbols-outlined text-sm">terminal</span>
              <span>{loginBrandData.codeFileName}</span>
            </div>
            <pre className="overflow-x-auto">
              <code className="text-secondary-fixed-dim whitespace-pre">
                <span>const </span>
                <span className="text-on-primary">user</span>
                <span> = initExperience({"{"}</span>
                  {"\n  "}focus: <span className="text-primary-container">true</span>,
                  {"\n  "}distractions: <span className="text-primary-container">false</span>,
                  {"\n  "}goals: [<span className="text-surface-container-lowest">&apos;mastery&apos;</span>, <span className="text-surface-container-lowest">&apos;growth&apos;</span>]
                  {"\n});"}
                  {"\n\n"}
                  <span className="text-primary-container">await</span>
                  <span> user.startJourney();</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
