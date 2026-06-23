import {
  checkoutFormLabels,
  mockCheckoutOrder,
} from "@/data/mockCheckoutPageData";

export default function OrderSummary() {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-8 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">{checkoutFormLabels.orderSummaryTitle}</h2>

      <div className="flex items-start gap-4 pb-6 border-b border-secondary-container mb-6">
        <div className="w-16 h-16 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined material-symbols-filled text-primary text-3xl">
            workspace_premium
          </span>
        </div>
        <div className="flex flex-col grow min-w-0">
          <span className="text-xs font-semibold text-primary tracking-wide uppercase mb-1">
            {mockCheckoutOrder.planBadge}
          </span>
          <span className="text-base font-semibold">{mockCheckoutOrder.planName}</span>
          <span className="text-sm text-secondary mt-1">
            {mockCheckoutOrder.planDescription}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-between items-center">
          <span className="text-sm text-secondary">구독 주기</span>
          <span className="text-sm font-semibold">
            {mockCheckoutOrder.billingCycle}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-secondary">시작일</span>
          <span className="text-sm font-semibold">
            {mockCheckoutOrder.startDate}
          </span>
        </div>
      </div>

      <div className="bg-surface rounded-lg p-6 flex flex-col gap-2 mt-auto border border-outline-variant">
        <div className="flex justify-between items-center mb-2">
          <span className="text-base text-on-surface font-semibold">
            {mockCheckoutOrder.totalLabel}
          </span>
          <span className="text-xs font-semibold text-secondary tracking-wide uppercase">
            {mockCheckoutOrder.vatNote}
          </span>
        </div>
        <div className="flex justify-end items-baseline gap-1 text-primary">
          <span className="font-code text-[32px] font-bold tracking-tighter leading-none">
            {mockCheckoutOrder.totalAmount}
          </span>
        </div>
      </div>
    </div>
  );
}
