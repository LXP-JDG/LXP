export const signupBrandData = {
  title: "Mastering\nModern Tech",
  description:
    "Elevate your skills with LXP's immersive learning environment. Clean, focused, and designed for professionals.",
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBxAJs49g-yISOzMyEcu8mahxCa9nA6QB6Y41q_QitaYZt-SG8nThFeg59H9OX-j7cGWOWgSSH1J6RuX_AhgB5qfLi8Z3I1mkGJbW1qsEJkCxPCdYUGS_HtKS1wzyPUhnHmg9mdR5j6fnrFS9Paq2CSidPR_OP_qKJuWwSSs3RqFeG2Y5-ftl3qoKAInnWByaCLWyHkFU6On6KVXAyDnjLJCfY30ugHs6USHzCSVALuX-5TIe2fV87L32BbHoM5hxygUz4Fs_PHrEA-",
} as const;

export const signupFormData = {
  title: "LXP 시작하기",
  subtitle: "새로운 학습의 여정을 환영합니다.",
  dividerLabel: "또는 이메일로 가입",
  emailLabel: "이메일",
  emailPlaceholder: "name@company.com",
  nicknameLabel: "닉네임",
  nicknamePlaceholder: "플랫폼에서 사용할 이름",
  passwordLabel: "비밀번호",
  passwordPlaceholder: "최소 8자 이상",
  passwordConfirmLabel: "비밀번호 확인",
  passwordConfirmPlaceholder: "비밀번호 다시 입력",
  subscriptionNotice:
    "가입 시 1개월 무료 구독권이 자동 지급됩니다.",
  subscriptionHighlight: "1개월 무료 구독권",
  submitLabel: "회원가입 완료",
  loginPrompt: "계정이 있으신가요?",
  loginLabel: "로그인",
  loginHref: "/login",
} as const;

export const socialSignupProviders = [
  {
    id: "google",
    label: "Google로 시작하기",
    variant: "outline" as const,
    icon: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6pDwJy2IYh7XB9VHfYbv9r2sFUvBampnHVyKzXHhxh4Oq-nWbiZ3XO0ouq_GvhXQ7nqtbH5Etl630ceZKd7UYojvIBnNvPTNrnzlEqZhfHD900MMx2aQbtxRAx5gEAcHBt1XK-FVS7bNf5SSH28934OdrYHsE-fyP96AYEHZA9ktC6o8wrnAhHIrW18GnxI3M_YCF96BPzsSMIRImfPei9k8YOOVN-fbzSsJWHx32-QesPn3iwKtLetUZyDjZjNxkRpmQT4mqRmS_",
      alt: "Google",
    },
  },
  {
    id: "github",
    label: "Github으로 시작하기",
    variant: "filled" as const,
    icon: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb2tFxudwhWlX6BLg-g8foWUp9AqV7ohSVDDO_3Gk2wnD2AKMVH1Fi-aub2K92i6Ova57XqvhEtp_fnHT4-1qyQyQF5tWxm3Tb42uguHKEm_ILVkuAJpQqbJ5z0Q4Tzrg-JtrB4J-DHrzMKzGdy_6Z9zt5rHvccSYSozSXSMc7l0GSBY2eajTbluZkbNOlIXrREo9_3Pw4UOXntpDy3ZXq6mR0As2w4tTjoiBoRidIpYxnEMQtbtSx9xi5Ux_lJ1dRTPDzPgdhaPlJ",
      alt: "Github",
      invert: true,
    },
  },
] as const;
