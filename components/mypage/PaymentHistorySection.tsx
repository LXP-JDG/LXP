import { mockPaymentHistory, myPageSectionTitles } from "@/data/mockMyPageData";

export default function PaymentHistorySection() {
  return (
    <section
      id="payments"
      className="bg-surface-container-lowest border border-[#E2E8F0] rounded-xl p-6 md:p-8 scroll-mt-24"
    >
      <div className="flex justify-between items-center mb-6 border-b border-[#E2E8F0] pb-4">
        <h3 className="text-2xl font-semibold text-on-surface">
          {myPageSectionTitles.payments}
        </h3>
        <button
          type="button"
          className="text-primary text-sm hover:underline"
        >
          전체 보기
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[520px]">
          <thead>
            <tr className="border-b border-[#E2E8F0] text-on-surface-variant text-xs font-semibold uppercase tracking-wide">
              <th className="py-3 px-4 font-normal">날짜</th>
              <th className="py-3 px-4 font-normal">내역</th>
              <th className="py-3 px-4 font-normal">금액</th>
              <th className="py-3 px-4 font-normal">상태</th>
            </tr>
          </thead>
          <tbody>
            {mockPaymentHistory.map((payment) => (
              <tr
                key={payment.id}
                className="border-b border-surface-variant hover:bg-surface transition-colors"
              >
                <td className="py-4 px-4 font-code text-sm text-on-surface-variant">
                  {payment.date}
                </td>
                <td className="py-4 px-4 text-sm text-on-surface font-semibold">
                  {payment.description}
                </td>
                <td className="py-4 px-4 font-code text-sm text-on-surface-variant">
                  {payment.amount}
                </td>
                <td className="py-4 px-4">
                  <span className="font-code text-sm px-2 py-1 rounded bg-[#eaf1ff] text-primary font-bold">
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
