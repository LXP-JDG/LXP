"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginFormData, socialLoginProviders } from "@/data/mockLoginPageData";
import { useAuth } from "@/lib/auth-context";
import { login } from "@/lib/api/auth";
import { ApiError } from "@/lib/api";
import GoogleIcon from "@/components/auth/GoogleIcon";

const inputClassName =
  "w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-secondary-fixed rounded-lg text-base text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all placeholder:text-secondary-fixed-dim";

export default function LoginForm() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { accessToken, refreshToken } = await login(email, password);
      signIn(email, accessToken, refreshToken, "MEMBER");
      router.push("/");
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError("로그인 중 오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[440px]">
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-2xl font-semibold text-on-surface mb-2">
          {loginFormData.title}
        </h2>
        <p className="text-base text-on-surface-variant">{loginFormData.subtitle}</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider"
          >
            {loginFormData.emailLabel}
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
              mail
            </span>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={loginFormData.emailPlaceholder}
              className={inputClassName}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider"
            >
              {loginFormData.passwordLabel}
            </label>
            <a
              href={loginFormData.forgotPasswordHref}
              className="text-sm text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              {loginFormData.forgotPasswordLabel}
            </a>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
              lock
            </span>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={loginFormData.passwordPlaceholder}
              className={inputClassName}
            />
          </div>
        </div>

        {error && (
          <p className="text-sm text-error bg-error-container/20 border border-error/30 rounded-lg px-4 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 bg-on-surface text-surface rounded-full text-base font-bold flex items-center justify-center gap-2 hover:bg-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
          ) : (
            <>
              <span>{loginFormData.submitLabel}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </>
          )}
        </button>
      </form>

      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-secondary-fixed" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-surface text-xs font-semibold text-on-surface-variant tracking-wider uppercase">
            {loginFormData.dividerLabel}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {socialLoginProviders.map((provider) => (
          <button
            key={provider.id}
            type="button"
            className="w-full py-3 px-4 bg-surface-container-lowest border border-secondary-fixed rounded-full flex items-center justify-center gap-3 hover:bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary-container/20 transition-colors text-sm text-on-surface font-semibold"
          >
            {provider.type === "google" ? (
              <GoogleIcon />
            ) : (
              <span className="material-symbols-outlined text-on-surface">{provider.icon}</span>
            )}
            {provider.label}
          </button>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-on-surface-variant">
        {loginFormData.signupPrompt}{" "}
        <Link
          href={loginFormData.signupHref}
          className="font-bold text-on-surface hover:text-primary transition-colors underline underline-offset-4 decoration-primary-container decoration-2"
        >
          {loginFormData.signupLabel}
        </Link>
      </p>
    </div>
  );
}
