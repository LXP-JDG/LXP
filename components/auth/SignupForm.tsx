"use client";

import Link from "next/link";
import {
  signupFormData,
  socialSignupProviders,
} from "@/data/mockSignupPageData";

const inputClassName =
  "h-12 px-4 rounded-xl border border-outline-variant bg-surface-container-lowest focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-base text-on-surface placeholder:text-outline w-full";

export default function SignupForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-full max-w-[440px]">
      <div className="mb-10 text-center">
        <div className="text-2xl font-bold text-on-surface mb-2">
          {signupFormData.title}
        </div>
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
              className={`w-5 h-5 ${provider.icon.invert ? "invert" : ""}`}
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
          <label
            htmlFor="signup-email"
            className="text-sm text-on-surface font-semibold"
          >
            {signupFormData.emailLabel}
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder={signupFormData.emailPlaceholder}
            className={inputClassName}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="signup-nickname"
            className="text-sm text-on-surface font-semibold"
          >
            {signupFormData.nicknameLabel}
          </label>
          <input
            id="signup-nickname"
            type="text"
            placeholder={signupFormData.nicknamePlaceholder}
            className={inputClassName}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="signup-password"
            className="text-sm text-on-surface font-semibold"
          >
            {signupFormData.passwordLabel}
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder={signupFormData.passwordPlaceholder}
            className={inputClassName}
          />
        </div>

        <div className="flex flex-col gap-1.5 mb-2">
          <label
            htmlFor="signup-password-confirm"
            className="text-sm text-on-surface font-semibold"
          >
            {signupFormData.passwordConfirmLabel}
          </label>
          <input
            id="signup-password-confirm"
            type="password"
            placeholder={signupFormData.passwordConfirmPlaceholder}
            className={inputClassName}
          />
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-container-low border border-surface-variant">
          <span className="material-symbols-outlined text-primary mt-0.5 text-xl">
            auto_awesome
          </span>
          <p className="text-sm text-on-surface-variant">
            가입 시{" "}
            <span className="font-semibold text-primary">
              {signupFormData.subscriptionHighlight}
            </span>
            이 자동 지급됩니다.
          </p>
        </div>

        <button
          type="submit"
          className="w-full h-12 mt-2 bg-primary-container text-on-primary-container rounded-full text-base font-bold hover:opacity-90 hover:shadow-sm transition-all duration-200"
        >
          {signupFormData.submitLabel}
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
