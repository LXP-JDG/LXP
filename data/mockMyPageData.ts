export const mockUserProfile = {
  name: "홍길동",
  nickname: "Gildong_Dev",
  email: "gildong@example.com",
  bio: "프론트엔드 개발자입니다.",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC7WGx5Gkun1YLwThExcJ7YToW4AhRZJ-_3Z6iEPHCY0svC1ZOkxlOade6ZAE63_uwVsVwT7adY_kdb1Ww54kylLGKXDzD4K-8lEB6HkNJZTtC5Bt_B-YbxNHZhrviQ5WMPboHJ80ayRX8-ztQGEd0BsjfoY8gnhcsmXTXn_rMiCEKH9Ldh2KkuetUCvI08XRM-kLadf_7Rd5vc-nCf7BE1kRzo4MA9xhpVKZk9EuZOTta56breZQwfkTUoIOGYBUTl-aqeBjJMRs_l",
  avatarHint: "권장 크기: 256x256px",
  changePhotoLabel: "사진 변경",
  saveLabel: "저장하기",
} as const;

export const myPageSideNavItems = [
  { id: "profile", label: "프로필 설정", icon: "person" },
  { id: "courses", label: "내 강좌", icon: "school" },
  { id: "picks", label: "내 픽 목록", icon: "favorite" },
  { id: "payments", label: "결제 내역", icon: "receipt_long" },
  { id: "subscription", label: "구독 정보", icon: "subscriptions" },
] as const;

export const mockMyCourses = [
  {
    id: "course-1",
    title: "실전! 모던 프론트엔드 개발 완벽 가이드",
    progress: 68,
    lastAccessed: "2026-06-20",
  },
  {
    id: "course-2",
    title: "데이터 분석을 위한 파이썬 마스터 클래스",
    progress: 24,
    lastAccessed: "2026-06-18",
  },
] as const;

export const mockPicks = [
  {
    id: "pick-1",
    type: "미션",
    title: "고급 리액트 패턴 마스터하기",
    description: "컴포넌트 설계와 상태 관리를 깊이 있게 다룹니다.",
  },
  {
    id: "pick-2",
    type: "강좌",
    title: "실전 클라우드 아키텍처",
    description: "AWS 기반의 확장 가능한 서버 구조 설계.",
  },
] as const;

export const mockPaymentHistory = [
  {
    id: "pay-1",
    date: "2023-10-15",
    description: "Pro Plan (Monthly)",
    amount: "$29.00",
    status: "완료",
  },
  {
    id: "pay-2",
    date: "2023-09-15",
    description: "Pro Plan (Monthly)",
    amount: "$29.00",
    status: "완료",
  },
] as const;

export const mockSubscription = {
  status: "유효",
  expiresAt: "2026.06.12",
  description:
    "프리미엄 요금제를 이용 중입니다. 모든 프리미엄 강좌에 접근할 수 있습니다.",
  cancelLabel: "구독 취소",
} as const;

export const myPageSectionTitles = {
  profile: "프로필 설정",
  courses: "내 강좌",
  picks: "내 픽 목록",
  payments: "결제 내역",
  subscription: "구독 정보",
} as const;
