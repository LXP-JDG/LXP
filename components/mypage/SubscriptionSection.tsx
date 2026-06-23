import { mockSubscription, myPageSectionTitles } from "@/data/mockMyPageData";

export default function SubscriptionSection() {
  return (
    <section
      id="subscription"
      className="bg-surface-container-lowest border border-[#E2E8F0] rounded-xl p-6 md:p-8 scroll-mt-24"
    >
      <div className="flex items-center space-x-2 mb-6">
        <span className="material-symbols-outlined text-primary-container">
          stars
        </span>
        <h3 className="text-2xl font-semibold text-on-surface">
          {myPageSectionTitles.subscription}
        </h3>
      </div>

      <div className="flex items-center space-x-3 mb-4">
        <span className="text-base text-on-surface-variant">현재 상태</span>
        <span className="text-sm bg-primary-container text-white px-3 py-1 rounded-full font-bold">
          {mockSubscription.status}
        </span>
      </div>

      <div className="font-code text-sm text-on-surface-variant mb-6">
        만료일 {mockSubscription.expiresAt}
      </div>

      <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
        {mockSubscription.description}
      </p>

      <button
        type="button"
        className="w-full bg-on-surface text-white py-3 rounded-full text-base hover:opacity-80 transition-all duration-200"
      >
        {mockSubscription.cancelLabel}
      </button>
    </section>
  );
}
