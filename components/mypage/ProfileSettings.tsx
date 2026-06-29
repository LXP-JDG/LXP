"use client";

import { useState } from "react";
import { mockUserProfile, myPageSectionTitles } from "@/data/mockMyPageData";

const inputClassName =
  "w-full bg-surface-container-lowest border border-[#E2E8F0] rounded-lg p-3 text-base text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all";

export default function ProfileSettings() {
  const [profile, setProfile] = useState<{ name: string; nickname: string; bio: string }>({
    name: mockUserProfile.name,
    nickname: mockUserProfile.nickname,
    bio: mockUserProfile.bio,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      id="profile"
      className="bg-surface-container-lowest border border-[#E2E8F0] rounded-xl p-6 md:p-8 scroll-mt-24"
    >
      <h3 className="text-2xl font-semibold text-on-surface mb-6 border-b border-[#E2E8F0] pb-4">
        {myPageSectionTitles.profile}
      </h3>

      <div className="flex items-center space-x-6 mb-8">
        <div className="w-24 h-24 rounded-full bg-surface-container border border-[#E2E8F0] flex items-center justify-center overflow-hidden shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover w-full h-full"
            src={mockUserProfile.avatarUrl}
            alt="프로필 사진"
          />
        </div>
        <div>
          <button
            type="button"
            className="bg-on-surface text-white px-4 py-2 rounded-full text-sm hover:opacity-80 transition-all duration-200 mb-2"
          >
            {mockUserProfile.changePhotoLabel}
          </button>
          <p className="text-tertiary text-sm">{mockUserProfile.avatarHint}</p>
        </div>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label
              htmlFor="profile-name"
              className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wide"
            >
              이름
            </label>
            <input
              id="profile-name"
              type="text"
              value={profile.name}
              onChange={(event) =>
                setProfile((prev) => ({ ...prev, name: event.target.value }))
              }
              className={inputClassName}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="profile-nickname"
              className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wide"
            >
              닉네임
            </label>
            <input
              id="profile-nickname"
              type="text"
              value={profile.nickname}
              onChange={(event) =>
                setProfile((prev) => ({
                  ...prev,
                  nickname: event.target.value,
                }))
              }
              className={inputClassName}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="profile-email"
            className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wide"
          >
            이메일
          </label>
          <input
            id="profile-email"
            type="email"
            value={mockUserProfile.email}
            disabled
            className="w-full bg-surface-container-low border border-[#E2E8F0] rounded-lg p-3 text-base text-tertiary cursor-not-allowed"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="profile-bio"
            className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wide"
          >
            자기소개
          </label>
          <textarea
            id="profile-bio"
            rows={4}
            value={profile.bio}
            onChange={(event) =>
              setProfile((prev) => ({ ...prev, bio: event.target.value }))
            }
            className={`${inputClassName} resize-none`}
          />
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full text-base font-bold hover:opacity-80 transition-all duration-200"
          >
            {mockUserProfile.saveLabel}
          </button>
        </div>
      </form>
    </section>
  );
}
