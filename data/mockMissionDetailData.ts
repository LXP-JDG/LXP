export const answerSortOptions = [
  { id: "latest", label: "최신순" },
  { id: "likes", label: "좋아요순" },
] as const;

export type AnswerSortId = (typeof answerSortOptions)[number]["id"];

export const mockMissionDetails = {
  "usestate-counter": {
    id: "usestate-counter",
    category: "리액트 입문",
    difficulty: "입문",
    title: "useState로 카운터 만들기",
    answerCount: 24,
    likeCount: 86,
    instructor: "강사 김민수",
    description:
      "React의 핵심 훅인 useState를 사용하여 버튼 클릭 시 숫자가 증가하고 감소하는 간단한 카운터 컴포넌트를 구현해 보세요.",
    starterCode: `import React, { useState } from 'react';

function Counter() {
  // 여기에 코드를 작성하세요
  
  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
}

export default Counter;`,
    answerForm: {
      title: "내 답안 작성하기",
      placeholder: "답안을 입력하세요...",
      notice: "구독자만 답안을 제출할 수 있어요",
      submitLabel: "답안 제출하기",
    },
    course: {
      title: "리액트로 시작하는 프론트엔드",
      courseId: "course-1",
      homeLabel: "강좌 홈으로 이동",
    },
    nextMission: {
      id: "useeffect-basics",
      title: "useEffect 활용하기",
    },
    answers: [
      {
        id: "ans-1",
        author: "FrontendWizard",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD3gcRNn-mszkKAR_HFlNPS8oDXgp5-e8GT83q20I36sMOWpVtCjKOsE9G9yCYXRgNo-GYfzY0yG8cZUVLKkigQ0QKe9TvlSjVoa3Q-xn08VS8q272xGcDg1VGBgjU2YpK0TRi6plBkcNDTj1R0WnFmf1SeSBYIons5zKe9fj64sVBoXqNR_TzL4ESKgGHY1DFOY2Zk8UBrJ1NU4t9s3_hjHz3vMVntRZawxCRHES0HXe6DSCFa64wHbajYrd_0MIlXT3JeNFFme1mc",
        createdAt: "1일 전",
        createdAtSort: 1,
        content:
          "useState를 사용해서 아주 간단하게 구현할 수 있습니다. 초기값을 0으로 설정하고 onClick 핸들러에 setCount를 연결하면 됩니다.",
        code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}`,
        likes: 42,
        commentCount: 2,
        isBest: true,
        likedByMe: true,
        comments: [
          {
            id: "cmt-1",
            author: "ReactBeginner",
            avatar:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD9IVnS0-cyVQ4f5jHndzJ67IAJBt4xtpafuPoeSuZ9PQU5ajYEFv-xEYTimZxRaqPklpoVGWag1F9zZT9Nrh08sgePZXs4kDnHBisLvYhF5vFsFgqoKCKHRNIvS36dj5_YzfCFRMacxRW944_Jo1DdQlNiiPT4d8dzPmsAfA9FRVtQ6ioMx4AnJ7Nii-VCNlOK2dLTVfivam5dGc1nYt071-jVim-3kYom9ASh30vRWMff68taJIq6ant_A0acpSMdq_GTsTFhlKaA",
            createdAt: "1일 전",
            content: "깔끔한 설명 감사합니다! 덕분에 이해가 잘 되었어요.",
          },
        ],
      },
      {
        id: "ans-2",
        author: "CodeNinja99",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDtPdaqQKj1XgtTPjy5QE5INKkWv02zhn7UWvs6U_bJ1crFTP-4ykFdSmw82qocTt-5vdCBEvThMpNw8PhUqisVDYgMCp6A-60tf_4a2hnidXnf879Kub5DbMHOncNDcXWIs6wk5hPTvz74fCZo9WV6dlXT5txxWYFTzpBQ0_OjMWsaIYAK6bV40815LGclDtgwZfmYPvlYyglaUTWh9Y3ZJkmeYLgnn1U2NrXBPFr-5r9Lq9ymwx5NG_upQKIHjD3YKEtERkLQuRJh",
        createdAt: "2일 전",
        createdAtSort: 2,
        content:
          "이전 상태를 기반으로 업데이트할 때는 함수형 업데이트를 사용하는 것이 안전합니다.",
        code: `// 함수형 업데이트 예시
<button onClick={() => setCount(prev => prev + 1)}>+1</button>`,
        likes: 15,
        commentCount: 0,
        isBest: false,
        likedByMe: false,
        comments: [],
      },
    ],
  },
} as const;

export type MissionDetail =
  (typeof mockMissionDetails)[keyof typeof mockMissionDetails];

export type MissionAnswer = MissionDetail["answers"][number];

export function getMissionDetail(missionId: string): MissionDetail | null {
  return (
    mockMissionDetails[missionId as keyof typeof mockMissionDetails] ?? null
  );
}
