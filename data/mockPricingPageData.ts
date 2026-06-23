export const pricingPageMeta = {
  title: "구독권 안내",
  subtitle:
    "당신의 학습 여정에 맞는 최적의 플랜을 선택하세요. 모든 플랜은 언제든 취소 가능합니다.",
} as const;

export const mockPricingPlans = [
  {
    id: "free",
    name: "무료 체험",
    description: "LXP의 기본 기능을 1개월간 체험해보세요.",
    price: "₩0",
    period: "/ 월",
    featured: false,
    badge: null,
    features: ["기본 강좌 접근", "커뮤니티 열람"],
    ctaLabel: "무료로 시작하기",
    ctaHref: "/signup",
    ctaVariant: "outline" as const,
  },
  {
    id: "monthly",
    name: "월간 구독권",
    description: "부담없이 시작하는 무제한 학습.",
    price: "₩19,000",
    period: "/ 월",
    featured: true,
    badge: "가장 인기",
    features: [
      "모든 프리미엄 강좌 무제한 수강",
      "Q&A 우선 답변 지원",
      "오프라인 저장 기능",
    ],
    ctaLabel: "지금 구독하기",
    ctaHref: "/checkout",
    ctaVariant: "filled" as const,
  },
] as const;

export type PricingPlan = (typeof mockPricingPlans)[number];
