export const navLinks = [
  { label: "강좌 탐색", href: "/courses" },
  { label: "미션", href: "/missions/usestate-counter" },
  { label: "요금제", href: "/pricing" },
  { label: "강사 소개", href: "/instructor/courses" },
] as const;

export const heroData = {
  title: "풀면서 배우는\n학습 경험",
  subtitle:
    "850개 미션, 32,000개의 답안. 강의를 보고 미션을 풀고, 답안으로 소통하며 성장하세요",
  primaryCta: "무료로 시작하기",
  secondaryCta: "강좌 둘러보기",
  previewImage: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyt8e1UC9HeXYdUetf_ATymH6VuXn9Hrh1EnLOpWC50qLhaMtA7Mtp1gYBRsK_pT_NqYWuT5gKbBewaiiGtlInGT6JFnpLzUgmP0MsCCkotOqbqLYgk-04fnRzZEBKeobiZgAFVJ6qht_hVXWpzjoWwK-oQAztP-kkl3HQVps22TnrJCcf_8-bVGTcKt1KfNlxpQV1aY0MKwunw7X5K7WCkadhiwVEyWUaEvWERqFj3iY0vpHG0OwXu3-MMlvNXWNetjnemWsWpthd",
    alt: "LXP 대시보드 UI 미리보기",
  },
} as const;

export const trustLogos = [
  "code_blocks",
  "developer_mode",
  "integration_instructions",
  "database",
  "terminal",
  "cloud_sync",
] as const;

export const learningSteps = [
  {
    icon: "play_circle",
    title: "강의 시청",
    description: "강사의 강의를 보며 개념을 익혀요",
  },
  {
    icon: "edit_note",
    title: "미션 풀이",
    description: "배운 내용을 미션으로 직접 풀어봐요",
  },
  {
    icon: "forum",
    title: "답안 공유",
    description: "다른 학습자의 답안과 소통하며 성장해요",
  },
] as const;

export const whyLxpFeatures = [
  {
    title: "양방향 학습",
    description: "일방적인 시청이 아닌, 참여형 학습으로 이해도를 높입니다.",
  },
  {
    title: "실시간 답안 공유",
    description: "동료 학습자들의 다양한 접근 방식을 보며 시야를 넓힙니다.",
  },
  {
    title: "강사 피드백",
    description: "전문가의 꼼꼼한 코드 리뷰와 피드백으로 실무 감각을 익힙니다.",
  },
  {
    title: "1개월 무료 체험",
    description: "부담 없이 모든 기능을 경험해보고 결정하세요.",
  },
] as const;

export const featuredMission = {
  id: "usestate-counter",
  badge: "오늘의 추천 미션",
  tags: ["입문", "React 입문"],
  title: "useState로 카운터 만들기",
  description:
    "React의 핵심 훅인 useState를 활용하여 버튼 클릭 시 숫자가 증가하고 감소하는 간단한 카운터 컴포넌트를 구현해 봅니다.",
  comments: 124,
  likes: 45,
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQwfz0EoyCO65budf9sFfWtmCQT3XmiyNakMifmVNG1rA5nu7UbKm6K1fPpfs-WVxl9VySJWtlKH7ozfTcWq6g4p9D-XPbpmckrxBayxaVO_AYca5XJfYi0JDYGRCnEAK5JqDxpMxT3lubOGPFYDfPa2snprMfYr_-D4PnuOyObLgM-7gkEdoB6rEMZDYLltTqEZ9gpqe958nYiuolhvjWfArxILn2ViOl7s9oj0zm1DodcNUDt377V1dbHqrOXQZjlE3WoogI2ZsV",
    alt: "웹 개발 미션 일러스트",
  },
} as const;

export const missions = [
  {
    tags: ["초급", "파이썬 기초"],
    title: "리스트 컴프리헨션 활용",
    description:
      "파이썬의 강력한 기능인 리스트 컴프리헨션을 사용하여 코드를 간결하게 작성해보세요.",
    comments: 89,
    likes: 32,
  },
  {
    tags: ["중급", "백엔드 아키텍처"],
    title: "마이크로서비스 간 비동기 통신 설계",
    description:
      "메시지 큐를 활용하여 마이크로서비스 간의 안정적인 비동기 통신 시스템을 설계합니다.",
    comments: 210,
    likes: 88,
  },
] as const;

export const statistics = [
  { icon: "group", value: "12,400+", label: "학습자" },
  { icon: "assignment", value: "850+", label: "미션" },
  { icon: "forum", value: "32,000+", label: "공유된 답안" },
] as const;

export const popularCourses = [
  {
    title: "실전! 모던 프론트엔드 개발 완벽 가이드",
    instructor: "김개발 튜터",
    rating: 4.9,
    students: "2,430명 수강",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQwfz0EoyCO65budf9sFfWtmCQT3XmiyNakMifmVNG1rA5nu7UbKm6K1fPpfs-WVxl9VySJWtlKH7ozfTcWq6g4p9D-XPbpmckrxBayxaVO_AYca5XJfYi0JDYGRCnEAK5JqDxpMxT3lubOGPFYDfPa2snprMfYr_-D4PnuOyObLgM-7gkEdoB6rEMZDYLltTqEZ9gpqe958nYiuolhvjWfArxILn2ViOl7s9oj0zm1DodcNUDt377V1dbHqrOXQZjlE3WoogI2ZsV",
      alt: "프론트엔드 개발 강좌",
    },
  },
  {
    title: "데이터 분석을 위한 파이썬 마스터 클래스",
    instructor: "이데이터 튜터",
    rating: 4.8,
    students: "1,890명 수강",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN4dTkMp6xohPZqsOz35X3Eef1uRYxHM9232_tuJeYLEXLMNlQR37pYod2ympbhwXxAnSRD8MPS_CUubGvXwgn_hzoupy9AVfTF9vSqLqCQCXM1lBhkNUvksw5pTrICegETiyavBOSed326WJsrxzX3LoxGEvUWeiRs7hO0iFhQhId6lfGhjyb5KZ7d7-2yupe1zBnaG_CHwQ8r51kk93CXi0K3zaLPbFS7JZcMfqWmvoO0Zg8lwwyeTYZwd1As5I4PCqsfBrCy7Mm",
      alt: "데이터 분석 강좌",
    },
  },
  {
    title: "UX/UI 포트폴리오 완성하기: 기초부터 실전까지",
    instructor: "박디자인 튜터",
    rating: 4.9,
    students: "3,100명 수강",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPoTeakBPNbjtIIhSmxqPPvHLJTqNemAxRl3a2A50692dUItWOAYL4PNE7c_BvLsU6Y-qR_SM2y1vPzWqI_E8cUgQbxNaCpq7D8crYrdSwKK5oRqZhH8AgtZB9R7N6gKvRkLnzVwUH__V4mgMPhpFdqx6qgKtCdJXdWTSKWl-pCt1c04aJ0WnbI-ng2I8FFPcHmtQz7b3rGn73a7SLrLpZDi2QEYbaT09MU8vbidEWXEbe3yrMybCwJsdRcqYUdFWWeLGvy4uZ0j4x",
      alt: "UX/UI 디자인 강좌",
    },
  },
  {
    title: "대규모 트래픽 처리를 위한 백엔드 시스템 설계",
    instructor: "최서버 튜터",
    rating: 4.7,
    students: "1,250명 수강",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2EBqM1xRYxHqzmx0x1O47mcfoIeZXpVh-bOwiCgsYhs6yKmpC7ks2WQCbSJtrxD_1dAgvyi8G92Ao3hw8HVyDba6xCYPIf6jCX98qGq9twshP1151u_aPnyHeLOvh5NBUPctQwp0mSYBYapSZDXCgp21mH68psryUDXk-B6cZzhKtIc2K7-JO9VWH6o3SuuM1sjXy0J1hqapicECzsOBFBCA4gxiZi6YKi_U135w0cDVNSrN6HEoEKh06-Q7C7XaP501oPMijJaPJ",
      alt: "백엔드 시스템 설계 강좌",
    },
  },
] as const;

export const testimonials = [
  {
    quote:
      "단순히 강의를 듣는 것을 넘어 직접 코드를 작성하고 다른 사람들의 코드를 볼 수 있어서 실력 향상에 큰 도움이 되었습니다.",
    author: "김개발 / 프론트엔드 취준생",
    featured: false,
  },
  {
    quote:
      "실무에서 마주할 법한 과제들을 미리 경험해볼 수 있어서 좋았습니다. 특히 피드백 시스템이 훌륭해요.",
    author: "이데이터 / 주니어 데이터 분석가",
    featured: true,
  },
  {
    quote:
      "이론만 배우던 때와는 다릅니다. 미션을 해결하면서 생기는 막막함을 커뮤니티와 함께 이겨내는 과정이 즐겁습니다.",
    author: "박디자인 / 학생",
    featured: false,
  },
] as const;

export const faqItems = [
  {
    question: "구독권 없이도 볼 수 있나요?",
    answer:
      "네, 일부 공개된 무료 강좌와 미션은 구독권 없이도 열람 및 학습이 가능합니다. 단, 프리미엄 콘텐츠와 전체 기능 이용을 위해서는 구독이 필요합니다.",
  },
  {
    question: "무료 체험은 어떻게 하나요?",
    answer:
      "회원가입 후 결제 정보를 등록하시면 1개월 동안 모든 프리미엄 기능을 무료로 이용하실 수 있습니다. 체험 기간 내 취소 시 요금이 청구되지 않습니다.",
  },
  {
    question: "환불 정책은 어떻게 되나요?",
    answer:
      "결제 후 7일 이내, 수강 이력이 없는 경우 100% 환불이 가능합니다. 자세한 환불 규정은 고객센터 또는 약관을 참고해주세요.",
  },
  {
    question: "미션은 누가 채점하나요?",
    answer:
      "기본적인 문법 및 결과물은 자동 채점 시스템을 통해 즉시 확인 가능하며, 코드의 구조나 퀄리티에 대해서는 강사 및 동료 학습자들의 리뷰를 받을 수 있습니다.",
  },
  {
    question: "강사 신청 방법은 무엇인가요?",
    answer:
      "하단 푸터의 '강사 지원' 메뉴를 통해 이력서와 샘플 강의/미션을 제출해주시면, 내부 심사를 거쳐 강사로 활동하실 수 있습니다.",
  },
] as const;

export const footerLinks = [
  { label: "회사 소개", href: "#" },
  { label: "이용 약관", href: "#" },
  { label: "개인정보 처리방침", href: "#" },
  { label: "고객 센터", href: "#" },
  { label: "비즈니스 문의", href: "#" },
] as const;
