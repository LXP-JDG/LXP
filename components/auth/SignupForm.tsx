"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signupFormData, socialSignupProviders } from "@/data/mockSignupPageData";
import { signup } from "@/lib/api/auth";
import { ApiError } from "@/lib/api";

const inputClassName =
  "h-12 px-4 rounded-xl border border-outline-variant bg-surface-container-lowest focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-base text-on-surface placeholder:text-outline w-full";

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (password.length < 6) {
      setError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    setLoading(true);
    try {
      await signup(email, password);
      router.push("/login");
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError("회원가입 중 오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[440px]">
      <div className="mb-10 text-center">
        <div className="text-2xl font-bold text-on-surface mb-2">{signupFormData.title}</div>
        <p className="text-sm text-secondary">{signupFormData.subtitle}</p>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {socialSignupProviders.map((provider) => (
          <button
            key={provider.id}
            type="button"
            className={
              provider.variant === "outline"
                ? "w-full h-12 flex items-center justify-center gap-3 bg-surface-container-lowest border border-outline-variant rounded-full text-on-surface hover:bg-surface-container-low transition-colors"
                : "w-full h-12 flex items-center justify-center gap-3 bg-on-surface text-surface-container-lowest rounded-full hover:bg-on-surface/90 transition-colors"
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={provider.icon.src}
              alt={provider.icon.alt}
              className={`w-5 h-5 ${"invert" in provider.icon && provider.icon.invert ? "invert" : ""}`}
            />
            <span className="text-sm font-semibold">{provider.label}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-outline-variant/50" />
        <span className="text-xs font-semibold text-secondary tracking-wide uppercase">
          {signupFormData.dividerLabel}
        </span>
        <div className="flex-1 h-px bg-outline-variant/50" />
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="signup-email" className="text-sm text-on-surface font-semibold">
            {signupFormData.emailLabel}
          </label>
          <input
            id="signup-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={signupFormData.emailPlaceholder}
            className={inputClassName}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="signup-password" className="text-sm text-on-surface font-semibold">
            {signupFormData.passwordLabel}
          </label>
          <input
            id="signup-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={signupFormData.passwordPlaceholder}
            className={inputClassName}
          />
        </div>

        <div className="flex flex-col gap-1.5 mb-2">
          <label htmlFor="signup-password-confirm" className="text-sm text-on-surface font-semibold">
            {signupFormData.passwordConfirmLabel}
          </label>
          <input
            id="signup-password-confirm"
            type="password"
            required
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder={signupFormData.passwordConfirmPlaceholder}
            className={inputClassName}
          />
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-container-low border border-surface-variant">
          <span className="material-symbols-outlined text-primary mt-0.5 text-xl">auto_awesome</span>
          <p className="text-sm text-on-surface-variant">
            가입 시{" "}
            <span className="font-semibold text-primary">{signupFormData.subscriptionHighlight}</span>
            이 자동 지급됩니다.
          </p>
        </div>

        {error && (
          <p className="text-sm text-error bg-error-container/20 border border-error/30 rounded-lg px-4 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 mt-2 bg-primary-container text-on-primary-container rounded-full text-base font-bold hover:opacity-90 hover:shadow-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
          ) : (
            signupFormData.submitLabel
          )}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-secondary">
          {signupFormData.loginPrompt}{" "}
          <Link
            href={signupFormData.loginHref}
            className="text-on-surface font-semibold hover:text-primary transition-colors ml-1"
          >
            {signupFormData.loginLabel}
          </Link>
        </p>
      </div>
    </div>
  );
}
