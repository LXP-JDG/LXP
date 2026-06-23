export const loginBrandData = {
  logo: "LXP",
  title: "지식 공유의\n새로운 기준.",
  description:
    "개발자와 전문가를 위한 현대적인 학습 경험 플랫폼. 불필요한 장식을 덜어내고 오직 성장에만 집중할 수 있는 환경을 제공합니다.",
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCWPsJkrek7cJ8ATOHDLScCMZOJ4npFud9DvSrRySBJ19T-cO9cVMgQu_j_6QHkHLEU4FJBvj6uS4HWvmw7Ab__n6bHY61LPdCAeDJATJr1yVXLK1n9U4PIHFroUMOMWFCZRl8SASXpuIWR6Q8-kJhCXfEA4-ZoIh7qJGWYplgxtZVnQH38k7BbDA1TduaBncxk9aBPxv9OkhUR7_nYW-xcd7ODFJETfIgw9CYFFIFyA6CYby-6x_LhlHk3KEGQpq4qOY1iQupO5HfH",
  codeFileName: "learning_path.js",
  codeSnippet: `const user = initExperience({
  focus: true,
  distractions: false,
  goals: ['mastery', 'growth']
});

await user.startJourney();`,
} as const;

export const loginFormData = {
  title: "다시 오신 것을 환영합니다",
  subtitle: "계속하려면 계정에 로그인하세요.",
  emailLabel: "이메일 주소",
  emailPlaceholder: "name@company.com",
  passwordLabel: "비밀번호",
  passwordPlaceholder: "••••••••",
  forgotPasswordLabel: "비밀번호를 잊으셨나요?",
  forgotPasswordHref: "#",
  submitLabel: "로그인",
  dividerLabel: "또는 소셜 계정으로 계속하기",
  signupPrompt: "계정이 없으신가요?",
  signupLabel: "회원가입",
  signupHref: "/signup",
} as const;

export const socialLoginProviders = [
  {
    id: "google",
    label: "Google 계정으로 로그인",
    type: "google" as const,
  },
  {
    id: "github",
    label: "Github 계정으로 로그인",
    type: "github" as const,
    icon: "code",
  },
] as const;
