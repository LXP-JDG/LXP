export const mockCoursePlayers = {
  "course-1": {
    courseId: "course-1",
    courseTitle: "프론트엔드 마스터 클래스",
    progress: {
      percent: 24,
      completed: 4,
      total: 18,
    },
    sections: [
      {
        id: "section-1",
        title: "Section 1: React 심화",
        lessons: [
          {
            id: "lec-1",
            title: "1. React 18 새로운 기능 살펴보기",
            duration: "12:45",
            completed: true,
          },
          {
            id: "lec-2",
            title: "2. Suspense와 Error Boundary의 이해",
            duration: "18:24",
            completed: false,
            current: true,
          },
          {
            id: "lec-3",
            title: "3. 동시성 렌더링(Concurrent Rendering) 실전",
            duration: "28:10",
            completed: false,
          },
          {
            id: "lec-4",
            title: "4. 상태 관리 라이브러리 비교 (Zustand vs Jotai)",
            duration: "45:20",
            completed: false,
          },
        ],
      },
    ],
    subscriptionGate: {
      title: "구독권이 필요한 콘텐츠입니다",
      description:
        "이 강의를 포함한 프리미엄 강좌를 시청하려면 LXP 플러스 구독이 필요합니다. 전문가의 깊이 있는 지식을 지금 만나보세요.",
      ctaLabel: "요금제 보러가기",
      ctaHref: "/pricing",
      videoPoster:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuABwlnsKHHxLz-UNfH0wp50ufRJSO6MblbZJBWSOZChJnJ40cfrUFR2x_NXebfy6nepYZ1mS7TcdVo_UIVyTlMOPKMpGqubvKARXTaDhgwoKJotlkCOdh511-5Wm_guPu3P3Mb6u6ibyvszAUtVmoN-JpKAKKckqRNcnaflnFF64j_evLh390jJPCMCc2B_NIlw5s0fvtae0Ov5fxmaldLaJNMPyDUmo1DHBGH-CcevfcdmEOa8KRMqwK4_CQ8TBwmJgm3JTGLmlPMj",
      playerDuration: "18:24",
    },
    lessons: {
      "lec-1": {
        id: "lec-1",
        title: "1. React 18 새로운 기능 살펴보기",
        badges: ["React", "기초"],
        premium: false,
        instructor: "김개발 강사",
        updatedAt: "2023. 10. 20",
        description:
          "React 18의 주요 변경 사항과 Automatic Batching, Transitions API 등 새로운 기능을 실습과 함께 살펴봅니다.",
        objectives: [
          "React 18 업그레이드 시 주의할 점",
          "createRoot API 마이그레이션",
          "Strict Mode의 이중 렌더링 이해",
        ],
      },
      "lec-2": {
        id: "lec-2",
        title: "2. Suspense와 Error Boundary의 이해",
        badges: ["React", "심화"],
        premium: true,
        instructor: "김개발 강사",
        updatedAt: "2023. 10. 24",
        description:
          "React 18에서 도입된 Suspense와 Error Boundary를 활용하여 더 나은 사용자 경험(UX)을 제공하는 비동기 UI 처리 패턴을 학습합니다. 기존의 로딩 스피너 구현 방식의 한계를 이해하고, 선언적인 데이터 패칭 전략을 프로젝트에 어떻게 적용할 수 있는지 깊이 있게 다룹니다.",
        objectives: [
          "Suspense 컴포넌트의 동작 원리와 생명주기",
          "React Query와 함께 사용하는 Suspense 기반 데이터 패칭",
          "Error Boundary를 활용한 선언적 에러 핸들링 패턴",
          "Fallback UI 최적화 기법",
        ],
      },
      "lec-3": {
        id: "lec-3",
        title: "3. 동시성 렌더링(Concurrent Rendering) 실전",
        badges: ["React", "심화"],
        premium: true,
        instructor: "김개발 강사",
        updatedAt: "2023. 10. 28",
        description:
          "Concurrent Rendering의 개념부터 useTransition, useDeferredValue 훅을 활용한 실전 패턴까지 다룹니다.",
        objectives: [
          "Concurrent Mode의 렌더링 우선순위 이해",
          "useTransition으로 UI 응답성 개선",
          "useDeferredValue 활용 사례",
        ],
      },
      "lec-4": {
        id: "lec-4",
        title: "4. 상태 관리 라이브러리 비교 (Zustand vs Jotai)",
        badges: ["React", "심화"],
        premium: true,
        instructor: "김개발 강사",
        updatedAt: "2023. 11. 02",
        description:
          "Zustand와 Jotai의 설계 철학과 API를 비교하고, 프로젝트 규모에 맞는 선택 기준을 제시합니다.",
        objectives: [
          "Zustand 스토어 설계 패턴",
          "Jotai atom 기반 상태 모델링",
          "라이브러리 선택 의사결정 프레임워크",
        ],
      },
    },
  },
} as const;

export type CoursePlayerData =
  (typeof mockCoursePlayers)[keyof typeof mockCoursePlayers];

export type LessonDetail =
  CoursePlayerData["lessons"][keyof CoursePlayerData["lessons"]];

export function getCoursePlayer(courseId: string): CoursePlayerData | null {
  return mockCoursePlayers[courseId as keyof typeof mockCoursePlayers] ?? null;
}

export function getLessonDetail(
  courseId: string,
  lessonId: string,
): LessonDetail | null {
  const player = getCoursePlayer(courseId);
  if (!player) return null;
  return player.lessons[lessonId as keyof typeof player.lessons] ?? null;
}

export function getDefaultLessonId(courseId: string): string | null {
  const player = getCoursePlayer(courseId);
  if (!player) return null;

  for (const section of player.sections) {
    const current = section.lessons.find((lesson) => lesson.current);
    if (current) return current.id;

    const firstIncomplete = section.lessons.find((lesson) => !lesson.completed);
    if (firstIncomplete) return firstIncomplete.id;
  }

  return player.sections[0]?.lessons[0]?.id ?? null;
}
