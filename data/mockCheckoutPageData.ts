export const checkoutSteps = [
  { id: 1, label: "주문 확인", status: "completed" as const },
  { id: 2, label: "결제 진행", status: "current" as const },
  { id: 3, label: "완료됨", status: "upcoming" as const },
] as const;

export const mockCheckoutOrder = {
  planBadge: "PRO PLAN",
  planName: "LXP 월간 구독권",
  planDescription:
    "모든 프리미엄 강좌 무제한 액세스 및 멘토링 세션 제공",
  billingCycle: "1개월 (자동 결제)",
  startDate: "오늘",
  totalLabel: "총 결제 금액",
  vatNote: "VAT 포함",
  totalAmount: "₩19,000",
  recurringAmount: "₩19,000",
} as const;

export const mockPaymentMethods = [
  {
    id: "card",
    label: "신용/체크카드",
    icon: "credit_card",
    default: true,
  },
  {
    id: "wallet",
    label: "간편 결제",
    icon: "account_balance_wallet",
  },
  {
    id: "transfer",
    label: "계좌 이체",
    icon: "account_balance",
  },
] as const;

export const checkoutFormLabels = {
  paymentTitle: "결제 수단",
  cardInfoTitle: "카드 정보 입력",
  cardNumber: "카드 번호",
  cardNumberPlaceholder: "0000 0000 0000 0000",
  expiry: "유효기간 (MM/YY)",
  expiryPlaceholder: "MM / YY",
  cvc: "CVC",
  cvcPlaceholder: "123",
  cardPassword: "카드 비밀번호 (앞 2자리)",
  cardPasswordPlaceholder: "**",
  termsPrefix: "매월",
  termsSuffix:
    "이(가) 정기 결제되는 것에 동의하며, 환불 정책 및 서비스 이용약관을 확인하였습니다.",
  refundPolicyLabel: "환불 정책",
  termsLabel: "서비스 이용약관",
  submitLabel: "결제하기",
  orderSummaryTitle: "주문 요약",
  backLabel: "돌아가기",
  securePaymentLabel: "안전한 결제",
} as const;

export const checkoutHeader = {
  backHref: "/pricing",
  logo: "LXP",
} as const;
