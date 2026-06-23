import { checkoutSteps } from "@/data/mockCheckoutPageData";

export default function CheckoutStepIndicator() {
  return (
    <div className="w-full flex justify-center items-center mb-4 overflow-x-auto">
      <div className="flex items-center gap-4 min-w-max px-2">
        {checkoutSteps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {step.status === "completed" ? (
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-xs font-semibold tracking-wide">
                  {step.id}
                </div>
              ) : step.status === "current" ? (
                <div className="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center text-xs font-semibold tracking-wide bg-surface-container-lowest">
                  {step.id}
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-xs font-semibold tracking-wide opacity-50">
                  {step.id}
                </div>
              )}
              <span
                className={`text-sm font-semibold whitespace-nowrap ${
                  step.status === "completed"
                    ? "text-primary"
                    : step.status === "current"
                      ? "text-on-surface"
                      : "text-secondary opacity-50"
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < checkoutSteps.length - 1 && (
              <div
                className={`w-16 h-px shrink-0 ${
                  step.status === "completed"
                    ? "bg-primary-container"
                    : "bg-secondary-container"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
