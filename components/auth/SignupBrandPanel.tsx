import { signupBrandData } from "@/data/mockSignupPageData";

export default function SignupBrandPanel() {
  const titleLines = signupBrandData.title.split("\n");

  return (
    <div className="hidden lg:flex lg:w-1/2 relative bg-surface overflow-hidden items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply"
        style={{ backgroundImage: `url('${signupBrandData.backgroundImage}')` }}
        role="img"
        aria-label="LXP 브랜드 일러스트"
      />

      <div className="relative z-10 max-w-lg p-margin-desktop text-center">
        <h1 className="text-4xl md:text-[48px] font-bold text-on-surface mb-6 leading-tight tracking-tight">
          {titleLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="text-base text-secondary">{signupBrandData.description}</p>
      </div>
    </div>
  );
}
