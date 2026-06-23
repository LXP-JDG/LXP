export const courseDetailTabs = [
  { id: "intro", label: "강좌 소개" },
  { id: "curriculum", label: "커리큘럼" },
  { id: "instructor", label: "강사" },
  { id: "reviews", label: "후기" },
] as const;

export type CourseDetailTabId = (typeof courseDetailTabs)[number]["id"];

export const mockCourseDetails = {
  "course-1": {
    id: "course-1",
    category: "개발",
    difficulty: "입문",
    title: "리액트로 시작하는 프론트엔드",
    rating: 4.8,
    reviewCount: 124,
    students: 1240,
    lectureCount: 12,
    missionCount: 8,
    instructor: {
      name: "김민수 강사",
      role: "현업 10년차 시니어 프론트엔드 엔지니어",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAir57qJ5Q6xf58g2b5F5938_85R32P9iuKdo2jkUaE-m5eKhauYoxQznT_nHJAQjeRbhxJ-jzAJGs3PSSffx4MtaKnHAmQ4HJEZbYisYw8EEjI5wXv0abDaHI69SNU6yCh3dawe3BJTiFHkClTSW_OSjpe_OoqXYbt9SEPjNyxIPF0WAVT6lfMIA7VJxoCoSE9XpQfaYhqjyQZJoeADwK7Dthr5sCD-hRbQh6Z7I9DF_4SnvemAx11ervksBwRcNm0oH-lwhGVyU7F",
      bio: "네이버, 카카오 등 대형 IT 기업에서 프론트엔드 아키텍처를 설계해 온 시니어 엔지니어입니다. React 생태계와 모던 웹 성능 최적화에 특화되어 있으며, 실무 중심의 커리큘럼 설계로 많은 개발자들의 성장을 돕고 있습니다.",
    },
    learnings: [
      "React의 핵심 개념인 컴포넌트, 상태, 프롭스를 완벽히 이해합니다.",
      "최신 Hooks API를 활용한 함수형 프로그래밍 패턴을 습득합니다.",
      "실전 프로젝트를 통해 모던 웹 애플리케이션 아키텍처를 경험합니다.",
      "상태 관리 라이브러리(Zustand)를 도입하여 복잡한 앱을 제어합니다.",
      "성능 최적화 기법과 배포 프로세스를 마스터합니다.",
    ],
    curriculum: [
      {
        week: "1주차: 기초",
        items: [
          {
            id: "lec-1",
            type: "lecture" as const,
            title: "강의 1. 오리엔테이션",
            duration: "08:24",
            active: true,
            completed: false,
          },
          {
            id: "mis-1",
            type: "mission" as const,
            title: "미션 1. 첫 컴포넌트",
            completed: true,
          },
          {
            id: "lec-2",
            type: "lecture" as const,
            title: "강의 2. JSX 이해하기",
            duration: "15:30",
            completed: false,
          },
        ],
      },
      {
        week: "2주차: 상태 관리",
        items: [
          {
            id: "lec-3",
            type: "lecture" as const,
            title: "강의 3. useState 기초",
            duration: "22:10",
            completed: false,
          },
          {
            id: "mis-2",
            type: "mission" as const,
            title: "미션 2. 카운터 만들기",
            completed: false,
          },
        ],
      },
    ],
    ratingBreakdown: [
      { stars: 5, percent: 85 },
      { stars: 4, percent: 10 },
      { stars: 3, percent: 5 },
    ],
    reviews: [
      {
        id: "rev-1",
        rating: 5,
        author: "이*진",
        date: "1주 전",
        content:
          "비전공자라 처음에는 리액트가 막연하게 느껴졌는데, 강사님이 핵심 개념을 정말 쉽게 비유를 들어 설명해주셔서 끝까지 완강할 수 있었습니다. 특히 매 챕터마다 제공되는 실전 미션을 통해 직접 코드를 짜보고 에러를 해결하는 과정이 성장에 가장 큰 도움이 되었습니다. 단순히 강의를 듣는 것을 넘어 실제 제품을 만들어보는 경험을 원하는 분들께 강력 추천합니다!",
        featured: false,
      },
      {
        id: "rev-2",
        rating: 5,
        author: "박*현",
        date: "2주 전",
        content:
          "현업에서 바로 쓸 수 있는 실전 팁들이 가득합니다. 단순한 문법 이론이 아니라, 왜 이런 패턴을 써야 하는지 아키텍처 관점에서 깊이 있게 다뤄주셔서 시야가 많이 넓어졌습니다. 특히 Zustand를 활용한 상태 관리 부분은 실무 프로젝트에 바로 도입해서 큰 효과를 봤습니다. 시니어 엔지니어의 노하우를 직접 전수받는 기분이었습니다.",
        featured: true,
      },
      {
        id: "rev-3",
        rating: 4.5,
        author: "김*수",
        date: "1달 전",
        content:
          "강의 퀄리티가 매우 높고 자료 정리가 정말 잘 되어 있습니다. 다만 실전 미션의 난이도가 뒤로 갈수록 갑자기 높아지는 경향이 있어 초보자는 조금 어려울 수 있지만, 질문 게시판의 답변이 빠르고 정확해서 큰 문제 없이 따라갈 수 있었습니다. 탄탄한 기본기를 쌓고 싶은 프론트엔드 개발자라면 반드시 들어야 할 필수 코스라고 생각합니다.",
        featured: false,
      },
    ],
    enrollment: {
      trialBadge: "1개월 무료 체험",
      originalPrice: "₩19,000",
      price: "₩0",
      priceNote: "→ 이후 ₩19,000/월",
      ctaLabel: "수강 신청하기",
      notice: "구독권이 있어야 강의·미션을 볼 수 있어요",
      features: [
        { icon: "play_lesson", label: "강의 12개 제공" },
        { icon: "assignment", label: "실전 미션 8개" },
        { icon: "workspace_premium", label: "수료증 발급 가능" },
      ],
    },
  },
} as const;

export type CourseDetail = (typeof mockCourseDetails)["course-1"];

export function getCourseDetail(courseId: string): CourseDetail | null {
  return mockCourseDetails[courseId as keyof typeof mockCourseDetails] ?? null;
}

export function getDefaultCourseDetail(): CourseDetail {
  return mockCourseDetails["course-1"];
}
