export default function InstructorMobileHeader() {
  return (
    <header className="md:hidden bg-surface-container-lowest border-b border-tertiary-fixed h-16 flex items-center justify-between px-4 fixed top-0 w-full z-50">
      <div className="text-2xl font-bold text-on-surface">LXP</div>
      <button
        type="button"
        className="p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant"
        aria-label="메뉴 열기"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
