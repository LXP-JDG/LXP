import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import CheckoutStepIndicator from "@/components/checkout/CheckoutStepIndicator";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentForm from "@/components/checkout/PaymentForm";

export default function CheckoutPageContent() {
  return (
    <>
      <CheckoutHeader />
      <main className="grow flex flex-col items-center py-12 px-4 md:px-margin-desktop">
        <div className="w-full max-w-container-max flex flex-col gap-12">
          <CheckoutStepIndicator />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <OrderSummary />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <PaymentForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
