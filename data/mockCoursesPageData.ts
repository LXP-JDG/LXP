export const coursesPageMeta = {
  title: "강좌 탐색",
  subtitle: "850개 강좌에서 원하는 학습을 시작하세요",
  searchPlaceholder: "강좌·강사를 검색하세요",
  loadMoreLabel: "더 보기",
  resetFiltersLabel: "초기화",
} as const;

export const sortTabs = [
  { id: "all", label: "전체" },
  { id: "popular", label: "인기순" },
  { id: "newest", label: "신규순" },
  { id: "reviews", label: "후기순" },
] as const;

export const categoryFilters = [
  { id: "dev", label: "개발", count: 342 },
  { id: "design", label: "디자인", count: 128 },
  { id: "biz", label: "비즈니스", count: 201 },
  { id: "data", label: "데이터", count: 179 },
] as const;

export const difficultyFilters = [
  { id: "beginner", label: "입문" },
  { id: "intermediate", label: "중급" },
  { id: "advanced", label: "고급" },
] as const;

export const ratingFilters = [
  { id: "45", label: "4.5 이상", minRating: 4.5 },
  { id: "40", label: "4.0 이상", minRating: 4.0 },
] as const;

export const initialSelectedCategories = ["dev", "data"] as const;
export const initialSelectedDifficulties = ["beginner"] as const;

export const mockCourses = [
  {
    id: "course-1",
    category: "개발",
    categoryId: "dev",
    difficulty: "입문",
    difficultyId: "beginner",
    title: "리액트로 시작하는 프론트엔드",
    description: "React와 Next.js를 활용한 현대적인 웹 구축",
    instructor: "김개발",
    instructorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7OcC742FoBxJJ6H0C0QZP3_EuZNuFg4pWyUkqZ6rfume7yb_1oA09d3hfCsHvQUoOT5DT1nuoKv2qUMDQa9mYgPiCcaN2Si4ho8JpwdLcH9PuErsn0mdXbm8mjwFiVZKLyQLpPQmkJnm-zU_8Irx8XZWCs-GxrJbiW1gFSGESlF6o2eIQyh7feqhTmP7F6rkFZ1urQiKLOQEClXZtNFAElQUjF84zSTRuwJD90YHY237Xban9VHXpSKzBSULNUEMMWMfPdUlx4bam",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-997LN-DSQCN-6ty78gcjzbS5B93IQAvcdSlJC4gdglza2fD3JjVVm6LypruZiJddTaejxk7u58xBXRQpFXwgFsd0ocbn0lZluuvEXovtzh_y6bXysRGEDOuphFl4m5669uxRmYNCYIV17yqloDZG480MEmTPIoqqL56oVWag6qwoGduQBLMc4S4qVHi_-sAL6UxWG1sLfoHt4aHMKAPJP5y598-6OfQ7IVh1grkxeBpvSVlpWUw62bZk8w3NeGT_0AXEg3ngbsjd",
    rating: 4.9,
    reviewCount: 1240,
    students: 3500,
    popularity: 98,
    createdAt: "2026-01-10",
  },
  {
    id: "course-2",
    category: "데이터",
    categoryId: "data",
    difficulty: "입문",
    difficultyId: "beginner",
    title: "데이터 분석을 위한 파이썬 마스터 클래스",
    description: "Pandas부터 머신러닝 기초까지 한 번에",
    instructor: "이데이터",
    instructorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPZS8ZmowLxPxgbAecwkpekEgYrD6hTbvMNiHUsHA2I1yFzH0oIOZ5V8bhZwYbkMTLUY9NLYev87JBnd7CxIWs5LGwv6YH7P787_34Gou5dbvU6av-uwHznuLkpGIFtPRnYY3GYmb6Y9EcR3sZzANYJoWT9w12PcSfNOTXJxQT-clg2iVoLmlNUFVt3EmA7f07n8FKapfGw0OewzNOBtvSt3kwuqYEDVy_LfaPg8tGdTrgVLZwNeopRbbiQ-X2a1XfWC4swTn1tDyu",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLk6YiEQhZZoXkXBwr42VUsGTGjEmfx2GsulJwGtGllXTLVhzAqiwVVmABBL73zuVnL6xrfMC4QcNUytQ10qtJ87ozPrH8nwIw3AcownGFDc5Wz9LPxXcZvpJRGLqf3Kxa68LKgP3fGQhFzHfXMxg0Qxi4ZE9JuqHwdyQoigzxE2tZyzG88Lfbxbr_IZxdAT1wHv8WsT6g4T3Pn2quotZRQQxT5L1p138V5-x_-t6pURLLSjBbNjbIIDnWwiRa0NSQeTL-EBmhBuy7",
    rating: 4.8,
    reviewCount: 890,
    students: 2100,
    popularity: 92,
    createdAt: "2026-02-05",
  },
  {
    id: "course-3",
    category: "개발",
    categoryId: "dev",
    difficulty: "중급",
    difficultyId: "intermediate",
    title: "Spring Boot 기반 대용량 트래픽 처리 아키텍처",
    description: "실무에서 쓰이는 백엔드 성능 최적화 기법",
    instructor: "박아키",
    instructorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCv1Ai_7IImJB-HvRExy4ten3lui5IoynmNmVV7-fl07TSLArETBSPbMsZq9h7kjSqiBkfxgjCFDVRF-wAvkcgd8g443VgZPxBRLECvPwYb3Z7Z87hFPu4IDam5ScgnrOpmlyARK7IUCebE6Y7uTrDy8o9xe_zU823uW9Up8r2ocziqBWjQDh4akssckAtt0lH2XNRQ9DEd3ZXZJysQk-dNHB57v9xO1uCgWsa9JUzVAgiSlywICs-ZS85nCddcNSEbafMXV2JPSbHi",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNvWixiISV7HMxxLoWNL-vQLUc40-nHYod8Vz4mCidHvuAyX3tc0iztfPyPh3OSlr2tTPQ_9oKkAVqpwR0Pm9DygbbiCLbO6qS2ZWI5n-qYALY8zD9D-TjAvhvQAVEYgZmceO9Rd_7N5Vh7nUOsds4WtATOhTP_bblUNb1oGnvPyb4A15ZwhFSRahuLyL4TO_zZFlsdkg7BaBWS0oWJj_a1y1zyi4Nkw3LqmBnh5GS622klwwOFHkVcieIDilqWSSOLnCI5E_TMIFE",
    rating: 4.9,
    reviewCount: 450,
    students: 1200,
    popularity: 85,
    createdAt: "2025-11-20",
  },
  {
    id: "course-4",
    category: "데이터",
    categoryId: "data",
    difficulty: "고급",
    difficultyId: "advanced",
    title: "SQL 최적화와 데이터베이스 튜닝 실전",
    description: "DBA 수준의 쿼리 성능 개선 전략",
    instructor: "정디비",
    instructorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGjqUgOnDgpwfjMRttTZ-zDRIrcnRxZNNruYx4LVsdtUKRTY7fv3isW3l6ZsNNS2jUJLGfc56MizILnzpcMW6ZYo5gsLvyV1qmZGTJMC4NbJYgB79ZsdSiwshS_EvmoY9e1QBpWXKCiljhAoF6RjUv7se0mCUPJMjkFdeDfHDKDNLABw0tnnK_D5dcvk3w9gnNFuBcrwKDQmPWX00WC9IxXLnUjL2bri5YkVsJLzYpYdMnEZ6hyHyISBXVaS2rZtYZZCVLr1mxPDuh",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWWncck1Znp7Iq2raZvHyqFIk2QeJsmtfI6yzidZHWHGDfQC9KH18vyx5-LjoJpfNbbhS24DfiJIarwn5fYgTbR77aIbSZ9lSbmFYCGdev0cDuJNGShl7Bh5I_dWS1YbY8Izy6IcfWhNPBiBMDlpwf2hqu2CjcUFpV4iCM90-edX8ZcsDSYDXsL8plcF_fBb5zLxYTjfMFltHaX6N6Pzr1a7S4fbI1dRFM1ZwC3Azk7vVqsYfMm3T6u0-QVUY9yO9W68VEuOj8_tKJ",
    rating: 4.7,
    reviewCount: 310,
    students: 850,
    popularity: 78,
    createdAt: "2025-10-15",
  },
  {
    id: "course-5",
    category: "개발",
    categoryId: "dev",
    difficulty: "입문",
    difficultyId: "beginner",
    title: "처음 시작하는 iOS 앱 개발 (SwiftUI)",
    description: "애플 공식 가이드를 반영한 입문 과정",
    instructor: "최애플",
    instructorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOyB0ZiXXhTkqLMtjbBY8d051NbKCB8DbQtoSzsY2_ijdN8X-FJ-i-G2oa8stUh6a7qVG8qKgNWKmX4sovJHo9Jj192VmAcigDj9vuoXFTQ5EX6ppsH7RS8e9jAMQzDUlxSyQlOvCZZN1cNm4n9h954TopnXBJn4hvpCPVdRNptoOC3bVl65wS6voVMRj9t-kGZeL6xA-SM4LQWuFZC9lQTQHaLWPrfEzaEnVGeYHTGCY9_wpveJEWwSCooy0W3v7uy9FS85q5AnN7",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ReZeqgD2E68aSzPQlGhlUBxDH8-ZUP2StnMak4ffST4BdS8IRMB_EZQVE1FRaYGzck-SWgBUVTG33jk0FLRpL4Pt7DuaHInkq6MQLBpQAuFoMJrQC2FVRLlEjmdtsJvB7qtXDqf8teBzbFas-bcf0OHQuaZTB4Cm87MLF1JUMv6FdIx5mr9hZZZvArXLFEX6juD1wzwk4eQScFer2u-qZXCi8iiqCxUI7Gvcy-WAD-MomR-5hxUivjTWb-GK8dq8NQuQbxtJs1-m",
    rating: 4.6,
    reviewCount: 520,
    students: 1600,
    popularity: 88,
    createdAt: "2026-03-01",
  },
  {
    id: "course-6",
    category: "개발",
    categoryId: "dev",
    difficulty: "중급",
    difficultyId: "intermediate",
    title: "실무자를 위한 Docker & Kubernetes 완벽 가이드",
    description: "컨테이너 오케스트레이션 기초부터 심화까지",
    instructor: "강데옵",
    instructorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBM5CLkWAM3VrvWUo0I2OhOwVogjQjWxDFvDvjh5etgX3_TftRQtVjAgKSlkMLUGQsp11Xt1vZLvgOLBwX6MaCIYgXuTTvlEY5xbouhhU8GWT57T78XshYCEVhV_KdYu6JqykQyBi2fekZexTAfcsRCJOvZ_IGX0iCdf2AuHBozoCbH4gmJCdwi6UJH7tUbbOoHhx5uoWxfLqnBwF6AnN9BGxuot9PzXThbI1K8wvJV4BB9vuY46r3AruSTK0X9eokIfvotQjIiQrDe",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjgb81ikHD2vZhKGHwvYQnbDOZA-ET-CPG7TpBQeI8iojSck_E3rsxpCSFrapp4R1xs0pZKlUdiYI5BgfAzIUzwkVvTugW8NFQzN2k6ulQJwXbMkSPXBHrLG-G9odwHJvHvmciYrawWEM5F-aspOKp6nZrW9iqeb3_B9D1MOdNlDfIE4klpYqCG1GPTO5fGAPmt18WlV5ap4ZBlbhQW1y7j26SsJNF4IWPFSHM9-2kZe2kt2TXnT2d3ce2a-vUnlxM-AOCbB1nrh_v",
    rating: 4.8,
    reviewCount: 730,
    students: 2400,
    popularity: 90,
    createdAt: "2026-01-28",
  },
  {
    id: "course-7",
    category: "디자인",
    categoryId: "design",
    difficulty: "입문",
    difficultyId: "beginner",
    title: "UX/UI 포트폴리오 완성하기: 기초부터 실전까지",
    description: "Figma로 완성하는 실무 디자인 워크플로우",
    instructor: "박디자인",
    instructorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPoTeakBPNbjtIIhSmxqPPvHLJTqNemAxRl3a2A50692dUItWOAYL4PNE7c_BvLsU6Y-qR_SM2y1vPzWqI_E8cUgQbxNaCpq7D8crYrdSwKK5oRqZhH8AgtZB9R7N6gKvRkLnzVwUH__V4mgMPhpFdqx6qgKtCdJXdWTSKWl-pCt1c04aJ0WnbI-ng2I8FFPcHmtQz7b3rGn73a7SLrLpZDi2QEYbaT09MU8vbidEWXEbe3yrMybCwJsdRcqYUdFWWeLGvy4uZ0j4x",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPoTeakBPNbjtIIhSmxqPPvHLJTqNemAxRl3a2A50692dUItWOAYL4PNE7c_BvLsU6Y-qR_SM2y1vPzWqI_E8cUgQbxNaCpq7D8crYrdSwKK5oRqZhH8AgtZB9R7N6gKvRkLnzVwUH__V4mgMPhpFdqx6qgKtCdJXdWTSKWl-pCt1c04aJ0WnbI-ng2I8FFPcHmtQz7b3rGn73a7SLrLpZDi2QEYbaT09MU8vbidEWXEbe3yrMybCwJsdRcqYUdFWWeLGvy4uZ0j4x",
    rating: 4.9,
    reviewCount: 620,
    students: 1800,
    popularity: 86,
    createdAt: "2026-02-18",
  },
  {
    id: "course-8",
    category: "비즈니스",
    categoryId: "biz",
    difficulty: "중급",
    difficultyId: "intermediate",
    title: "스타트업을 위한 제품 전략과 그로스 해킹",
    description: "PMF 달성을 위한 데이터 기반 의사결정",
    instructor: "한비즈",
    instructorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAN4dTkMp6xohPZqsOz35X3Eef1uRYxHM9232_tuJeYLEXLMNlQR37pYod2ympbhwXxAnSRD8MPS_CUubGvXwgn_hzoupy9AVfTF9vSqLqCQCXM1lBhkNUvksw5pTrICegETiyavBOSed326WJsrxzX3LoxGEvUWeiRs7hO0iFhQhId6lfGhjyb5KZ7d7-2yupe1zBnaG_CHwQ8r51kk93CXi0K3zaLPbFS7JZcMfqWmvoO0Zg8lwwyeTYZwd1As5I4PCqsfBrCy7Mm",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAN4dTkMp6xohPZqsOz35X3Eef1uRYxHM9232_tuJeYLEXLMNlQR37pYod2ympbhwXxAnSRD8MPS_CUubGvXwgn_hzoupy9AVfTF9vSqLqCQCXM1lBhkNUvksw5pTrICegETiyavBOSed326WJsrxzX3LoxGEvUWeiRs7hO0iFhQhId6lfGhjyb5KZ7d7-2yupe1zBnaG_CHwQ8r51kk93CXi0K3zaLPbFS7JZcMfqWmvoO0Zg8lwwyeTYZwd1As5I4PCqsfBrCy7Mm",
    rating: 4.5,
    reviewCount: 280,
    students: 950,
    popularity: 72,
    createdAt: "2026-04-02",
  },
] as const;

export type MockCourse = (typeof mockCourses)[number];
