export const instructorProfile = {
  name: "강사 센터",
  subtitle: "지식 공유의 시작",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCAITI8qesJBbvA0ttWgrcEsb4m-n9voLXddxGK_gHc6nyln3qae1XxCeu1O1pZ4M29s8DoL56fIGm7SNXHsLzgqltg7qiAHOEa2BihayL7d7EZpsZvOVXe1JDBkO5dsCv7Fq1c9V3ipACRPX6ZNoNmnqYzLF8_NQVnwKi6_i_-ELWkpwAuvNuarDhRQ_lvYHLfyn4XluiPosYhZaGbHI22rN2-fMZfIo0LKNbj8UsYwfeyj8X79HXedl_13GqpfAEjpaQo-_yEzKks",
  createCourseLabel: "새 강좌 만들기",
} as const;

export const instructorNavItems = [
  { id: "dashboard", label: "대시보드", icon: "dashboard", href: "#" },
  {
    id: "courses",
    label: "내 강좌",
    icon: "school",
    href: "/instructor/courses",
    active: true,
    filled: true,
  },
  { id: "stats", label: "학습 통계", icon: "leaderboard", href: "#" },
  { id: "assignments", label: "과제 제출", icon: "assignment", href: "#" },
  { id: "community", label: "커뮤니티", icon: "forum", href: "#" },
] as const;

export const instructorFooterNav = [
  { id: "settings", label: "설정", icon: "settings", href: "#" },
  { id: "help", label: "고객센터", icon: "help", href: "#" },
] as const;

export const instructorCoursesPageMeta = {
  title: "강좌 관리",
  subtitle: "운영 중인 강좌의 상태를 모니터링하고 콘텐츠를 업데이트하세요.",
  searchPlaceholder: "강좌 검색...",
  tableTitle: "진행 중인 강좌",
  filterLabel: "필터",
  paginationText: "총 3개 중 1-3 표시",
} as const;

export const mockInstructorStats = [
  {
    id: "students",
    label: "총 수강생",
    value: "1,248",
    icon: "group",
    trend: "+12%",
    trendLabel: "지난 달 대비",
    progress: null,
  },
  {
    id: "revenue",
    label: "누적 수익 (₩)",
    value: "12,450,000",
    icon: "payments",
    trend: "+8.5%",
    trendLabel: "지난 달 대비",
    progress: null,
  },
  {
    id: "completion",
    label: "평균 완강률",
    value: "68%",
    icon: "donut_large",
    trend: null,
    trendLabel: null,
    progress: 68,
  },
] as const;

export const mockInstructorCourses = [
  {
    id: "course-react",
    title: "모던 리액트 마스터 클래스",
    meta: "프론트엔드 • 12주 과정",
    icon: "terminal",
    status: "운영중",
    statusVariant: "active" as const,
    students: 452,
    progress: 80,
    progressLabel: "80%",
    recruiting: false,
  },
  {
    id: "course-backend",
    title: "실전 백엔드 아키텍처",
    meta: "백엔드 • 8주 과정",
    icon: "database",
    status: "운영중",
    statusVariant: "active" as const,
    students: 284,
    progress: 45,
    progressLabel: "45%",
    recruiting: false,
  },
  {
    id: "course-design",
    title: "UX/UI 시스템 디자인",
    meta: "디자인 • 모집중",
    icon: "design_services",
    status: "모집중",
    statusVariant: "recruiting" as const,
    students: null,
    progress: null,
    progressLabel: "시작 전",
    recruiting: true,
  },
] as const;

export type InstructorCourse = (typeof mockInstructorCourses)[number];
